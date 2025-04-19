import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const Courses = () => {
  
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
      'CS 504 - Software Engineering',
      'CS 506 - Programming for Computing',
      'CS 519 - Cloud Computing Overview',
      'CS 533 - Computer Architecture',
      'CS 547 - Secure Systems and Programs',
      'CS 622 - Discrete Math and Algorithms for Computing',
      'DS 510 - Artificial Intelligence for Data Science',
      'DS 620 - Machine Learning & Deep Learning',
  ];

  const depthOfStudyCourses = [
      'CS 624 - Full-Stack Development I',
      'CS 628 - Full-Stack Development II',
  ];

  const capstoneCourse = [
      'CS 687 - Computer Science Capstone',
  ];

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.logo} />
      <Text style={styles.sectionTitle}>Enter Your Favorite Course:</Text>
      <TextInput
        style={styles.input}
        placeholder="ex: CS 624"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />

      <Text style={styles.sectionTitle}>Core Requirements (24 Credits):</Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.courseText}>{course}</Text>
      ))}

      <Text style={styles.sectionTitle}>Depth of Study (6 Credits):</Text>
      {depthOfStudyCourses.map((course, index) => (
        <Text key={index} style={styles.courseText}>{course}</Text>
      ))}

      <Text style={styles.sectionTitle}>Capstone (3 Credits):</Text>
      <Text style={styles.courseText}>{capstoneCourse}</Text>

      <Text style={styles.catalogCallout}>
        View the full catalog at:
        {'\n'}
        https://cityu.smartcatalogiq.com/2022-2023/ay-2022-2023-catalog/
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0ffff',
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
  },
  courseText: {
    fontSize: 16,
    marginBottom: 5,
  },
  catalogCallout: {
    marginTop: 30,
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
  },
});

export default Courses;