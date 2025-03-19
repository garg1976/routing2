// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';

// function Home() {
//   const navigate = useNavigate(); // Hook for navigation

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email('Invalid email format').required('Email is required'),
//       password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//     }),
//     onSubmit: (values) => {
//       // Simulate API login response with token
//       const fakeToken = '123456abcdef';
      
//       // Store token in localStorage
//       localStorage.setItem('token', fakeToken);

//       console.log('User logged in:', values);
//       alert('Login Successful! Redirecting to Dashboard...');
      
//       // Redirect to dashboard
//       navigate('/dashboard');
//     },
//   });

//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <div className="input-container">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.email && formik.errors.email ? (
//             <p className="error">{formik.errors.email}</p>
//           ) : null}
//         </div>
//         <div className="input-container">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"  
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.password && formik.errors.password ? (
//             <p className="error">{formik.errors.password}</p>
//           ) : null}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Home;




import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // Check if the user is already logged in
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      const fakeToken = '123456abcdef';
      localStorage.setItem('token', fakeToken);
      console.log('User logged in:', values);
      alert('Login Successful! Redirecting to Dashboard...');
      navigate('/dashboard');
    },
  });

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? <p className="error">{formik.errors.email}</p> : null}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? <p className="error">{formik.errors.password}</p> : null}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Home;
