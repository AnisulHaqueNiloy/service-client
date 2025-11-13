
// // import React, { useEffect, useState } from 'react';
// // import Navbar from './Navbar';
// // import Footer from './Footer';
// // import { useLoaderData } from 'react-router';
// // import AllService from '../pages/AllService';

// // const Services = () => {
// //     const Allservices = useLoaderData();
// //     const [services, setServices] = useState();
// //     const [loading, setLoading] = useState(true)

// //     // console.log(Allservices)

// //     // const [minPrice, setMinPrice] = useState('');
// //     // const [maxPrice, setMaxPrice] = useState('');

// //     fetch('http://localhost:3000/services') 
// //             .then(res => res.json())
// //             .then(data => {
// //                 setServices(data);
// //                 // setLoading(false);
// //             })

// //     // useEffect(()=>{
// //     //     fetch('http://localhost:3000/services') 
// //     //         .then(res => res.json())
// //     //         .then(data => {
// //     //             setServices(data);
// //                 // setLoading(false);
// //     //         })
// //     // },[])
// //             // .catch(error => {
// //             //     console.error("Error fetching services:", error);
// //             //     // setLoading(false);
// //             // });


// //         //    useEffect(() => {
// //         // setLoading(true);
        
// //         // 🚀 ২. Query URL তৈরি করা: minPrice ও maxPrice যুক্ত করা
// //         // let url = 'http://localhost:3000/services';
        
// //         // যদি যেকোনো একটি ফিল্টার থাকে, তবে Query Parameter যুক্ত করুন
// //     //     if (minPrice || maxPrice) {
// //     //         url += `?`;
// //     //         if (minPrice) {
// //     //             url += `minPrice=${minPrice}&`;
// //     //         }
// //     //         if (maxPrice) {
// //     //             url += `maxPrice=${maxPrice}`;
// //     //         }
// //     //         // শেষে অতিরিক্ত '&' থাকলে তা মুছে দিন
// //     //         if (url.endsWith('&')) {
// //     //             url = url.slice(0, -1);
// //     //         }
// //     //     }


// //     //     fetch(url)
// //     //         .then(res => res.json())
// //     //         .then(data => {
// //     //             setServices(data);
// //     //             setLoading(false);
// //     //         })
// //     //         .catch(error => {
// //     //             console.error("Error fetching services:", error);
// //     //             setLoading(false);
// //     //         });
            
// //     // }, [minPrice, maxPrice]); // ✅ ৩. minPrice/maxPrice চেঞ্জ হলেই ডেটা আবার ফেচ হবে


// //     // ৪. ফর্ম হ্যান্ডেলার: এটি ফর্ম সাবমিট হলে কল হবে
// //     // const handleFilter = (e) => {
// //     //     e.preventDefault();
// //     //     const form = e.target;
        
// //     //     // ফর্ম থেকে মান নিয়ে স্টেটে সেট করুন, যা useEffect কে ট্রিগার করবে
// //     //     setMinPrice(form.min.value);
// //     //     setMaxPrice(form.max.value);
// //     // };

// //     // if (loading) return <span className="loading loading-spinner loading-lg"></span>;



// //     return (
// //         <div className='w-11/12 mx-auto'>
// //             <div>
// //                 <Navbar></Navbar>
// //             </div>
// //             {/* <div>
// //                 <form onSubmit={handleFilter} className="mb-8 p-4 bg-gray-100 rounded-lg flex justify-center my-10 gap-4 items-center">
// //                     <input 
// //                         type="number" 
// //                         name="min" 
// //                         placeholder="Min Price" 
// //                         className="input input-bordered w-full max-w-xs" 
// //                         defaultValue={minPrice}
// //                     />
// //                     <input 
// //                         type="number" 
// //                         name="max" 
// //                         placeholder="Max Price" 
// //                         className="input input-bordered w-full max-w-xs" 
// //                         defaultValue={maxPrice}
// //                     />
// //                     <button type="submit" className="btn btn-primary">Apply Filter</button>
// //                     <button type="button" className="btn btn-ghost" onClick={() => {setMinPrice(''); setMaxPrice('');}}>
// //                         Reset
// //                     </button>
// //                 </form>
// //             </div> */}
// //             <div className='grid grid-cols-3 gap-4 my-6'>
// //                 {
// //                     Allservices.map(service=> <AllService key={service._id} service={service}></AllService>)
// //                 }
// //             </div>
// //             <div>
// //                 <Footer></Footer>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Services;














































// // // import React, { useEffect, useState } from 'react';
// // // import Navbar from '../components/Navbar';
// // // import Footer from '../components/Footer';
// // // import AllService from '../pages/AllService';
// // // import { useLoaderData } from 'react-router';

// // // const Services = () => {

// // //     const initialServices = useLoaderData(); 
    
// // //     // ✅ ১. filtered data রাখার জন্য services স্টেট
// // //     const [services, setServices] = useState(initialServices || []); 
// // //     const [loading, setLoading] = useState(false); // শুরুতে লোডার দরকার নেই কারণ ডেটা লোডার থেকে এসেছে

// // //     // Min/Max Price স্টেট
// // //     const [minPrice, setMinPrice] = useState('');
// // //     const [maxPrice, setMaxPrice] = useState('');


// // //     // 🚀 প্রধান ডেটা ফেচিং লজিক
// // //     // এই useEffect minPrice বা maxPrice পরিবর্তিত হলেই কল হবে
// // //     useEffect(() => {
// // //         // যদি minPrice বা maxPrice না থাকে, তবে initial data রেন্ডার করবে (ঐচ্ছিক: অথবা fetch call করবে)
// // //         if (!minPrice && !maxPrice) {
// // //             // যদি ফিল্টার না থাকে, তবে প্রাথমিক লোডার ডেটা দেখান (যাতে অপ্রয়োজনীয় API কল এড়ানো যায়)
// // //             setServices(initialServices || []);
// // //             setLoading(false);
// // //             return;
// // //         }

// // //         setLoading(true);
        
// // //         // 🛠️ ২. Query URL তৈরি করা: minPrice ও maxPrice যুক্ত করা
// // //         let url = 'http://localhost:3000/services';
        
// // //         url += `?`;
// // //         if (minPrice) {
// // //             url += `minPrice=${minPrice}&`;
// // //         }
// // //         if (maxPrice) {
// // //             url += `maxPrice=${maxPrice}`;
// // //         }
        
// // //         // শেষে অতিরিক্ত '&' থাকলে তা মুছে দিন
// // //         if (url.endsWith('&')) {
// // //             url = url.slice(0, -1);
// // //         }

// // //         fetch(url)
// // //             .then(res => res.json())
// // //             .then(data => {
// // //                 setServices(data);
// // //                 setLoading(false);
// // //             })
// // //             .catch(error => {
// // //                 console.error("Error fetching services:", error);
// // //                 setLoading(false);
// // //             });
            
// // //     // useEffect-এর dependency: minPrice, maxPrice অথবা initialServices চেঞ্জ হলে
// // //     }, [minPrice, maxPrice, initialServices]); 


// // //     // ৪. ফর্ম হ্যান্ডেলার: এটি ফর্ম সাবমিট হলে কল হবে
// // //     const handleFilter = (e) => {
// // //         e.preventDefault();
// // //         const form = e.target;
        
// // //         // ফর্ম থেকে মান নিয়ে স্টেটে সেট করুন, যা useEffect কে ট্রিগার করবে
// // //         setMinPrice(form.min.value);
// // //         setMaxPrice(form.max.value);
// // //     };

// // //     if (loading) return <span className="loading loading-spinner loading-lg mx-auto block mt-20"></span>;


// // //     return (
// // //         <div className='w-11/12 mx-auto'>
// // //             <Navbar></Navbar>
            
// // //             <div className='mt-8'>
// // //                 <h1 className="text-4xl font-extrabold text-center mb-10 text-indigo-600">Our Services</h1>
                
// // //                 {/* 🚀 ৫. ফিল্টার ফর্ম */}
// // //                 <form onSubmit={handleFilter} className="mb-8 p-6 bg-white shadow-xl rounded-xl flex flex-wrap justify-center my-10 gap-6 items-center border-t-4 border-indigo-500">
// // //                     <input 
// // //                         type="number" 
// // //                         name="min" 
// // //                         placeholder="সর্বনিম্ন মূল্য (Min Price)" 
// // //                         className="input input-bordered w-full md:w-60 focus:ring-indigo-500" 
// // //                         defaultValue={minPrice}
// // //                     />
// // //                     <input 
// // //                         type="number" 
// // //                         name="max" 
// // //                         placeholder="সর্বোচ্চ মূল্য (Max Price)" 
// // //                         className="input input-bordered w-full md:w-60 focus:ring-indigo-500" 
// // //                         defaultValue={maxPrice}
// // //                     />
// // //                     <button type="submit" className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none w-full md:w-auto">
// // //                     Apply Filter
// // //                     </button>
// // //                     <button type="button" className="btn btn-outline btn-error w-full md:w-auto" onClick={() => {setMinPrice(''); setMaxPrice('');}}>
// // //                      Reset
// // //                     </button>
// // //                 </form>
// // //             </div>
            
// // //             {/* ⚠️ ৬. রেন্ডারিং-এ services স্টেট ব্যবহার করা হয়েছে */}
// // //             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
// // //                 {
// // //                     services && services.length > 0 ? (
// // //                         services.map(service => <AllService key={service._id} service={service}></AllService>)
// // //                     ) : (
// // //                          <p className="text-center col-span-full text-xl text-red-500 p-10 bg-red-50 rounded-lg">
// // //                             দুঃখিত! এই মূল্যের মধ্যে কোনো সার্ভিস খুঁজে পাওয়া যায়নি।
// // //                         </p>
// // //                     )
// // //                 }
// // //             </div>
            
// // //             <Footer></Footer>
// // //         </div>
// // //     );
// // // };

// // // export default Services;

// import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import AllService from '../pages/AllService';
// import { useLoaderData } from 'react-router';

// const Services = () => {
//   const initialServices = useLoaderData(); 
//   const [services, setServices] = useState(initialServices || []);
//   const [loading, setLoading] = useState(false);

//   // 🔽 Sorting order state: 'asc' or 'desc'
//   const [sortOrder, setSortOrder] = useState('');

//   // 🚀 Fetch sorted data from backend
//   const handleSort = (order) => {
//     setSortOrder(order);
//     setLoading(true);

//     fetch(`http://localhost:3000/services/sort?order=${order}`)
//       .then(res => res.json())
//       .then(data => {
//         setServices(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error("Error fetching sorted data:", error);
//         setLoading(false);
//       });
//   };

//   if (loading) return <span className="loading loading-spinner loading-lg mx-auto block mt-20"></span>;

//   return (
//     <div className='w-11/12 mx-auto'>
//       <Navbar />

//       <div className='flex justify-center items-center gap-4 my-10'>
//         <button
//           onClick={() => handleSort('asc')}
//           className={`btn ${sortOrder === 'asc' ? 'btn-primary' : 'btn-outline'}`}
//         >
//           Low to High
//         </button>
//         <button
//           onClick={() => handleSort('desc')}
//           className={`btn ${sortOrder === 'desc' ? 'btn-primary' : 'btn-outline'}`}
//         >
//           High to Low
//         </button>
//         <button
//           onClick={() => {
//             setSortOrder('');
//             setServices(initialServices);
//           }}
//           className='btn btn-ghost'
//         >
//           Reset
//         </button>
//       </div>

//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
//         {services && services.length > 0 ? (
//           services.map(service => (
//             <AllService key={service._id} service={service}></AllService>
//           ))
//         ) : (
//           <p className="text-center col-span-full text-xl text-red-500 p-10 bg-red-50 rounded-lg">
//             No services found.
//           </p>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Services;

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AllService from '../pages/AllService';
import { useLoaderData } from 'react-router';

const Services = () => {
  const initialServices = useLoaderData();
  const [services, setServices] = useState(initialServices || []);
  const [loading, setLoading] = useState(false);

  // Filter & Sort states
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  // ✅ Apply Filter Button Handler
  const handleFilter = (e) => {
    e.preventDefault();
    setLoading(true);

    let url = `http://localhost:3000/services/filter?`;
    if (minPrice) url += `minPrice=${minPrice}&`;
    if (maxPrice) url += `maxPrice=${maxPrice}&`;
    if (sortOrder) url += `order=${sortOrder}`;

    // Remove trailing &
    if (url.endsWith('&')) url = url.slice(0, -1);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching filtered data:", error);
        setLoading(false);
      });
  };

  // ✅ Reset Button
  const handleReset = () => {
    setMinPrice('');
    setMaxPrice('');
    setSortOrder('');
    setServices(initialServices);
  };

  if (loading)
    return <span className="loading loading-spinner loading-lg mx-auto block mt-20"></span>;

  return (
    <div className="w-11/12 mx-auto">
      <Navbar />

      {/* 🔹 Filter & Sort Form */}
      <form
        onSubmit={handleFilter}
        className="mb-8 p-6 bg-white shadow-xl rounded-xl flex flex-wrap justify-center my-10 gap-6 items-center border-t-4 border-sky-500"
      >
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="input input-bordered w-full md:w-52 focus:ring-sky-500"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="input input-bordered w-full md:w-52 focus:ring-sky-500"
        />

        {/* <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setSortOrder('asc')}
            className={`btn ${sortOrder === 'asc' ? 'btn-primary' : 'btn-outline'}`}
          >
            Low → High
          </button>
          <button
            type="button"
            onClick={() => setSortOrder('desc')}
            className={`btn ${sortOrder === 'desc' ? 'btn-primary' : 'btn-outline'}`}
          >
            High → Low
          </button>
        </div> */}

        <button type="submit" className="btn btn-success">Apply Filter</button>
        {/* <button type="button" className="btn btn-ghost" onClick={handleReset}>
          Reset
        </button> */}
      </form>

      {/* 🔹 Render Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {services && services.length > 0 ? (
          services.map((service) => (
            <AllService key={service._id} service={service}></AllService>
          ))
        ) : (
          <p className="text-center col-span-full text-xl text-red-500 p-10 bg-red-50 rounded-lg">
            No services found in this range.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Services;
