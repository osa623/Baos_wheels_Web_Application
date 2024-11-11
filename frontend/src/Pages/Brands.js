import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Loading2 from '../oth/Loading2';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Brand Logos
import mercedesbenz from '../assests/Brand Logos/Mercedes_benz.png';
import bmw from '../assests/Brand Logos/bmw.png';
import audi from '../assests/Brand Logos/audi.png';
import nissan from '../assests/Brand Logos/nissan.png';
import honda from '../assests/Brand Logos/honda.png';
import mitsubishi from '../assests/Brand Logos/mitsubhishi.png';
import rangerover from '../assests/Brand Logos/range_rover.png';
import tesla from '../assests/Brand Logos/tesla.png';
import toyota from '../assests/Brand Logos/toyota.png';
import mazda from '../assests/Brand Logos/mazda.png';

const Brands = () => {
  const { brandname } = useParams();
  const [reviews, setreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Brand name from URL:", brandname);

    const fetchreviews = async () => {
      try {

        const response = await axios.get(`http://localhost:5000/api/reviews/brand/${brandname}`);
        setreviews(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error Fetching reviews:", error);
      }
    };



    if (brandname) {
      fetchreviews();
    }
  }, [brandname]);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setIsFiltered(false); // If search is empty, reset to show all items
      setFilteredItems([]);
      return;
    }

    const filtered = reviews.filter((item) =>
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredItems(filtered);
    setIsFiltered(filtered.length > 0);
  };

  
  const handleOpenreviews = (reviews_id) =>{
    navigate(`/reviews/${reviews_id}`)
}

  return (
    <div className='relative w-full h-auto lgs:p-2'>
        
          <div className='flex sms:flex-col lgs:w-full mds:w-[100vw] h-auto justify-between items-start sms:items-center sms:pt-24 lgs:pt-32 mds:pt-24 p-10'>
            <div className='flex h-auto mds:w-[100vw] sms:w-[80vw] justify-between items-start'>

            <div className='flex flex-col h-auto w-auto items-start'>
                  <h1 className='flex flex-col w-auto lgs:text-2xl mds:text-md overflow-hidden font-ibmplexsans  sms:text-md' style={{
                      fontWeight:'300'
                    }}>
                        Reviews{' '}<div className='h-[0.1rem] w-auto bg-baseprimary' data-aos='fade-right' data-aos-delay='400'/>
                    </h1>
                    <h1 className='flex flex-col  lgs:text-5xl font-russoone sms:text-2xl mds:text-4xl' style={{
                      fontWeight:'300'
                    }}>
                        {brandname}
                    </h1>

              </div>

              <div className='hidden sms:flex mds:flex flex-col h-auto w-auto'>
                <div className='flex flex-col items-start justify-center bg-transparent w-auto h-auto lgs:mr-8'>
                      <h2 className='flex flex-col font-ibmplexsans text-md text-secondary overflow-hidden' style={{fontWeight:'300'}}>Brand{''}
                        <div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right'/>
                      </h2>
                        <div className='flex flex-col h-[6rem] sms:pt-2'>
                      {((brandname === 'Mercedes Benz' || brandname === 'mercedes benz') && (
                          <img src={mercedesbenz} alt='SUV' style={{width:'80px', objectFit:'fill'}}/>
                        )) || ((brandname === 'Bmw' || brandname === 'bmw') && (
                          <img src={bmw} alt='Sedan' style={{width:'50px'}}/>
                        )) || ((brandname === 'Audi' || brandname === 'audi') && (
                          <img src={audi} alt='Sedan' style={{width:'50px'}}/>   
                        )) || ((brandname === 'Nissan' || brandname === 'nissan') && (
                          <img src={nissan} alt='Sedan' style={{width:'50px'}}/>
                        )) || ((brandname === 'honda' || brandname === 'Honda') && (
                          <img src={honda} alt='Sedan' style={{width:'50px'}}/>   
                        )) || ((brandname === 'Mitsubhishi' || brandname === 'mitsubhishi') && (
                          <img src={mitsubishi} alt='Sedan' style={{width:'50px'}}/>   
                        )) || ((brandname === 'Range Rover' || brandname === 'range rover') && (
                          <img src={rangerover} alt='Sedan' style={{width:'100px'}}/>
                        )) || ((brandname === 'tesla' || brandname === 'Tesla') && (
                          <img src={tesla} alt='Sedan' style={{width:'50px'}}/>   
                        )) || ((brandname === 'toyota' || brandname === 'Toyota') && (
                          <img src={toyota} alt='Sedan' style={{width:'50px'}}/>   
                        )) || ((brandname === 'Mazda' || brandname === 'mazda') && (
                          <img src={mazda} alt='Sedan' style={{width:'50px'}}/>
                        ))
                        
                        
                        }</div>


                </div>

              </div>


            </div>


            <div className='hidden lgs:flex h-auto w-[50vw] items-center justify-center  overflow-hidden'>
              <div className="flex w-[40vw] lgs:p-5 items-center justify-center drop-shadow-lg">
              <input
                type="text"
                className="transition-all duration-300 ease-in-out items-center $
                lgs:w-[50vw] sms:w-[60vw] mds:w-vw] mds:mt-5 ml-10 sms:ml-5 mr-5 px-4 py-2 border-2 border-gray-300 rounded-full outline-none"
                placeholder="Search by Brand, Body Type"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />              <button
              onClick={handleSearch}
              className="flex flex-col lgs:w-[16rem] sms:w-[80vw] sms:mt-2 items-center justify-center lgs:h-[2.5rem] sms:h-[2.5rem] bg-baseprimary text-white rounded-full hover:bg-primary hover:text-baseprimary transition-all duration-300 ease-in-out"
            >
              Search{''}<div className='bg-baseprimary h-[0.15rem] will-change-auto transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100'/>
            </button>
            </div>
        
           </div>
          </div>   
      {isLoading ? (
        <Loading2/>
      ) : (
       
        <div className='flex flex-col w-auto h-auto bg-secondary items-center justify-center rounded-t-2xl p-5 '>

             <div className="hidden sms:flex mds:flex flex-col w-[100vw] mds:h-[10rem] lgs:p-6 items-center justify-center">
                  <div className="flex w-auto items-center justify-center">
                    <input
                      type="text"
                      className="transition-all duration-300 ease-in-out items-center justify-center 
                      sms:w-[80vw] mds:w-[80vw] px-4 py-2 border-2 border-gray-300 focus:border-baseprimary focus:border-2 rounded-full outline-none"
                      placeholder="Search by Brand, Body Type"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button
                      onClick={handleSearch}
                      className="flex lgs:w-[8rem] sms:w-[80vw] mds:w-[80vw] mt-2 items-center justify-center h-[2.5rem] bg-baseprimary text-white rounded-full transition-all duration-300 ease-in-out"
                    >
                      Search{''}<FontAwesomeIcon icon={faSearch} className='mx-2'/>{''}<div className='bg-baseprimary h-[0.15rem] will-change-auto transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100'/>
                    </button>
            </div>

            <div className='hidden lgs:grid mds:grid lgs:grid-cols-4 lgs:gap-4 lgs:p-10 mds:grid-cols-2 gap-3 p-10'>
                  {isLoading ? (
                    <Loading2/>
                  ) : (
                                   (isFiltered ? filteredItems : reviews)
                                    .sort((b,a) => new Date(a.date) - new Date(b.date))
                                    .slice(0,4).map((reviews) => (
                                       <div key={reviews._id} onClick={() => handleOpenreviews(reviews._id)} className=' bg-primary rounded-lg border-2 lgs:scale-125 cursor-pointer overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-105' data-aos='fade-up'>
                                       <div className='bg-transparent lgs:h-[8rem] mds:h-[8rem] w-auto mb-2 rounded-lg overflow-hidden'>
                      
                                                                  {reviews.images.length > 0 && (
                                                                      <img
                                                                      src={reviews.images[0]}
                                                                      alt={reviews.title}
                                                                      className="w-full lgs:h-[8rem] mds:h-[8rem] mds:w-[20rem] object-cover rounded-t-lg  transition-transform duration-300 ease-in-out  hover:scale-125"
                  />
                                                                  )}
                  
                  
                  
                                        </div>
                  
                                  <div className='flex flex-col h-auto mds:w-auto lgs:w-[100vw] justify-start items-start '>
                                        <div className='flex flex-col overflow-hidden text-secondary sms:text-md lgs:text-sm font-ibmplexsans sms:pl-4 pl-5'>
                                         {reviews.category}{''}<div className='bg-baseprimary h-[0.15rem] w-auto' data-aos='fade-left' data-aos-delay='400'/>
                                        </div>

                                        <h2 className=' text-baseextra4 font-semibold lgs:text-3xl mds:text-2xl font-kanit  pl-5'>
                                         {reviews.brand}
                                      </h2>
                                      <h3 className=' text-baseextra4 lg:text-md mds:text-xl  mds:mb-5 font-kanit lgs:mb-5  pl-5' style={{
                                        fontWeight:'300'
                                      }}>
                                         {reviews.title}
                                      </h3>

                                       </div>
                                  </div>     
                 ))
                  )}

              </div>

              <div className='hidden sms:grid  sms:grid-cols-1  gap-3 p-5 mt-5 overflow-hidden'>
                  {isLoading ? (
                    <Loading2/>
                  ) : (
                                   (isFiltered ? filteredItems : reviews)
                                    .sort((b,a) => new Date(a.date) - new Date(b.date))
                                    .map((reviews) => (
                                      <div key={reviews._id} onClick={() => handleOpenreviews(reviews._id)} className=' flex h-auto w-full bg-primary rounded-lg overflow-hidden  border-2 cursor-pointer' data-aos='fade-up'>
                                      <div className='bg-transparent h-auto w-40 rounded-lg overflow-hidden'>
                     
                                                                 {reviews.images.length > 0 && (
                                                                     <img
                                                                     src={reviews.images[0]}
                                                                     alt={reviews.title}
                                                                     className="w-full h-40  object-cover rounded-t-lg transition-transform duration-300 ease-in-out  hover:scale-125"
                 />
                                                                 )}
                 
                 
                 
                                       </div>
                                    <div className='flex flex-col w-60 h-auto items-start justify-center p-2'>                          
                                             <div className='flex flex-col text-secondary text-md font-russoone  pl-5'>
                                             {reviews.category}{''}<div className='bg-baseprimary h-[0.1rem] w-auto'/>
                                             </div>
                                             <h2 className=' text-baseextra4 text-xl font-semibold  font-ibmplexsans  pl-5'>
                                             {reviews.brand}
                                           </h2>
                                           <h3 className=' text-baseextra4 text-md mds:text-xl font-kanit pl-5'>
                                             {reviews.title}
                                           </h3>
                                    </div>              
                                      </div>
                 ))
                  )}

              </div>                  

        </div>

      )}
    </div>
  );
}

export default Brands;
