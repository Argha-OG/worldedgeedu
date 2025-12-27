import React, { createContext, useContext, useState, useEffect } from 'react';
import { universities as initialUniversities, courses as initialCourses } from '../data/mockData';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [universities, setUniversities] = useState(() => {
        const saved = localStorage.getItem('worldedge_universities');
        return saved ? JSON.parse(saved) : initialUniversities;
    });

    const [courses, setCourses] = useState(() => {
        const saved = localStorage.getItem('worldedge_courses');
        return saved ? JSON.parse(saved) : initialCourses;
    });

    // Persist changes to LocalStorage
    useEffect(() => {
        localStorage.setItem('worldedge_universities', JSON.stringify(universities));
    }, [universities]);

    useEffect(() => {
        localStorage.setItem('worldedge_courses', JSON.stringify(courses));
    }, [courses]);

    // University CRUD
    const addUniversity = (uni) => {
        const newUni = { ...uni, id: Date.now() }; // Simple ID generation
        setUniversities([...universities, newUni]);
    };

    const updateUniversity = (id, updatedUni) => {
        setUniversities(universities.map(u => u.id === id ? { ...updatedUni, id } : u));
    };

    const deleteUniversity = (id) => {
        setUniversities(universities.filter(u => u.id !== id));
        // Also delete associated courses? Optional for now.
    };

    // Course CRUD
    const addCourse = (course) => {
        const newCourse = { ...course, id: Date.now() };
        setCourses([...courses, newCourse]);
    };

    const updateCourse = (id, updatedCourse) => {
        setCourses(courses.map(c => c.id === id ? { ...updatedCourse, id } : c));
    };

    const deleteCourse = (id) => {
        setCourses(courses.filter(c => c.id !== id));
    };

    return (
        <DataContext.Provider value={{
            universities,
            courses,
            addUniversity,
            updateUniversity,
            deleteUniversity,
            addCourse,
            updateCourse,
            deleteCourse
        }}>
            {children}
        </DataContext.Provider>
    );
};
