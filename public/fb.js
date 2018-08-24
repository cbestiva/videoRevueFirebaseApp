// Initialize Firebase
var config = {
  apiKey: "AIzaSyB4AP6rTK-aIooaOsP4Nb07F0gNrpKfRQ8",
  authDomain: "testing-37348.firebaseapp.com",
  databaseURL: "https://testing-37348.firebaseio.com",
  projectId: "testing-37348",
  storageBucket: "testing-37348.appspot.com",
  messagingSenderId: "846107345955"
};
firebase.initializeApp(config);

let db = firebase.firestore()
const settings = { timestampsInSnapshots: true };
db.settings(settings);

// const courseStruct = function () {
//   return {
//     courses: ['Java Web App and Servlet', 'Javascript Roadtrip'],
//     courseName: 'Java Web App and Servlet',
//     userName: 'Sarah Holderness',
//     userTitle: 'Author',
//     reviews: [
//       {
//         module: 'Module 1',
//         clip: 'Clip 1',
//         timestamp: '0:00',
//         assignee: 'Sarah',
//         file: 'https://www.dropbox.com/s/6y9yicrvg6gllai/Level1-1_1AuthorSlide.m4v?dl=0',
//         comment: 'Slide needs to be updated with author info.'
//       },
//       {
//         module: 'Module 1',
//         clip: 'Clip 1',
//         timestamp: '0:46',
//         assignee: 'Sarah',
//         file: null,
//         comment: 'Should there be audio here? I can try to record and send it to you if you don\'t have it.'
//       }
//     ]
//   }
// }

// const addCourse = function (courseInfo) {
//   db.collection("courses").add(courseInfo)
//     .then(function (docRef) {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function (error) {
//       console.error("Error adding document: ", error);
//     });
// }

// addCourse(courseStruct())

// db.collection('courses').doc('Java Web App And Servlet').collection('reviews').doc('review-1-or-something').set({
//   module: 'Module 1',
//   clip: 'Clip 1',
//   timestamp: '0:00',
//   assignee: 'Sarah',
//   file: 'https://www.dropbox.com/s/6y9yicrvg6gllai/Level1-1_1AuthorSlide.m4v?dl=0',
//   comment: 'Slide needs to be updated with author info.'
// })

const getCourses = function () {
  db.collection("courses").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });
}

const addReview = function ({ courseId, module, clip, file, comment, assignee }) {
  console.log('comment in addReview ', comment)
  db.collection("courses").doc(courseId).collection('reviews').add({
    module,
    clip,
    file,
    comment,
    assignee,
    timestamp: Date.now()
  })
    .then(function (response) {
      console.log("response ", response);
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}

// const getAllCourses

const getCourse = function (courseId) {
  db.collection('courses').doc(courseId).get().then((querySnapshot) => {
    if (querySnapshot !== null) {
      // querySnapshot.forEach((doc) => {
      // this.reviews.push(doc.data())
      // });
      console.log(querySnapshot)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }).catch(function (error) {
    console.log("Error getting document:", error);
  })
}