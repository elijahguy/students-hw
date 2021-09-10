import React from 'react';
import Score from './Score';
import './student.css';

function Student(props) {
  return (
    <div className='main_container'>
      {props.all_students.map((studentData, idx) => {
        // console.log(props.all_students);
        console.log(studentData.name);
        console.log(studentData.scores);
        return (
          <div className='dynamic_info' key={idx}>
            <h2 className='names'>{studentData.name + '! '}</h2>
            <h3 className='bio'>
              Bio: <p className='inner_bio'>{[studentData.bio]}</p>
            </h3>
            <h4 className='score_text'>Scores</h4>
            <div className='dynamic_score_info'>
              <Score object={studentData} />
            </div>
          </div>
        );

        // setStudentData(studentData);
        // return <Student all_students={studentData} />;
      })}
    </div>
  );
}

export default Student;