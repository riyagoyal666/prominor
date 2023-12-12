// import React from 'react';
// import {Route,Link, Routes} from 'react-router-dom';
// import {Layout,Typography,Space} from 'antd';
// import {Navbar,Exchanges,Homepage,Cryptocurrencies,CryptoDetails,News,Login,Signup,ProtectedRoute,CoinsTable,CoinPage} from './components';
// import './App.css'
// import { UserAuthContextProvider } from './context/UserAuthContext';



// const App = () => {


    


//   return (
//     <div className='app'>
//         <div className='navbar'>
//             <Navbar/>
//         </div>
//         <div className='main'>
//              <Layout> 
//                 <div className='routes'>
//                 <UserAuthContextProvider>
//                     <Routes>
//                         <Route path="/" element={<Login />} />
//                         <Route path="/signup" element={<Signup />} />
//                         <Route exact path="/home" element={
//                               <ProtectedRoute>
//                                     <Homepage />
//                               </ProtectedRoute>
//                         }>    
//                         </Route>
//                         {/* <Route exact path="/exchanges" element={
//                              <ProtectedRoute>
//                                    <Exchanges/>
//                              </ProtectedRoute>
//                         }>   
//                         </Route> */}

//                         <Route exact path="/cryptocurrencies" element={ 
//                             <ProtectedRoute>
//                                 <Cryptocurrencies/>
//                             </ProtectedRoute>
//                         }> 
//                         </Route>
//                         <Route exact path="/coins/:id" element={
//                             <ProtectedRoute>
//                                 <CoinPage/>
//                             </ProtectedRoute>
//                         }> 
//                         </Route>
//                         <Route exact path="/coinstable" element={
//                             <ProtectedRoute>
//                                 <CoinsTable/>
//                             </ProtectedRoute>
//                         }> 
//                         </Route>
//                         <Route exact path="/news" element={
//                             <ProtectedRoute>
//                                 <News/>
//                             </ProtectedRoute>
//                         }> 
//                         </Route>
//                     </Routes>
//                 </UserAuthContextProvider>
                    
//                 </div>
//              </Layout> 
        
//             <div className='footer' >
//                 <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
//                     Cryptoverse<br/>
//                     All right reserved
//                 </Typography.Title>
//                 <Space>
//                     <Link to="/home">Home</Link>
//                     <Link to="/cryptocurrencies">Cryptocurrencies</Link>
//                     <Link to="/news">News</Link>
//                 </Space>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default App;








// import React from 'react';
// import { Route, Link, Routes } from 'react-router-dom';
// import { Layout, Typography, Space, Button } from 'antd';
// import {
//   Navbar,
//   Exchanges,
//   Homepage,
//   Cryptocurrencies,
//   CryptoDetails,
//   News,
//   Login,
//   Signup,
//   ProtectedRoute,
//   CoinsTable,
//   CoinPage,
// } from './components';
// import { UserAuthContextProvider } from './context/UserAuthContext';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import annyang from 'annyang';
// import './App.css';

// const App = () => {
//   const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

//   const handleVoiceNavigation = (command) => {
//     switch (command.toLowerCase()) {
//       case 'home':
//         navigateTo('/home');
//         break;
//       case 'cryptocurrencies':
//         navigateTo('/cryptocurrencies');
//         break;
//       case 'news':
//         navigateTo('/news');
//         break;
//       default:
//         console.log('Command not recognized:', command);
//     }
//   };

//   const navigateTo = (route) => {
//     window.location.href = route;
//   };

//   const handleStartListening = () => {
//     resetTranscript();
//     if (annyang) {
//       annyang.start();
//       annyang.addCommands({ '*command': handleVoiceNavigation });
//     } else {
//       console.error('Annyang is not available.');
//     }
//   };

//   return (
//     <div className='app'>
//       <div className='navbar'>
//         <Navbar />
//       </div>
//       <div className='main'>
//         <Layout>
//           <div className='routes'>
//             <UserAuthContextProvider>
//               <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route
//                   exact
//                   path="/home"
//                   element={
//                     <ProtectedRoute>
//                       <Homepage />
//                     </ProtectedRoute>
//                   }
//                 ></Route>
//                 <Route exact path="/exchanges" element={<ProtectedRoute> <Exchanges/> </ProtectedRoute> }>   
//                 </Route>
//                 <Route exact path="/cryptocurrencies" element={<ProtectedRoute> <Cryptocurrencies/> </ProtectedRoute>}> 
//                 </Route>
//                 <Route exact path="/coins/:id" element={<ProtectedRoute> <CoinPage/> </ProtectedRoute>}> 
//                 </Route>
//                 <Route exact path="/coinstable" element={<ProtectedRoute> <CoinsTable/> </ProtectedRoute>}> 
//                 </Route>
//                 <Route exact path="/news" element={<ProtectedRoute> <News/> </ProtectedRoute>}> 
//                 </Route>
//               </Routes>
//             </UserAuthContextProvider>
//           </div>
//         </Layout>
//         <div className='voice-button'>
//         <Button onClick={handleStartListening}>Start Listening</Button>
//       </div>
//         <div className='footer'>
//           <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
//             DigiCoin<br />
//             All right reserved
//           </Typography.Title>
//           <Space>
//             <Link to='/home'>Home</Link>
//             <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
//             <Link to='/news'>News</Link>
//           </Space>
//         </div>
//       </div>
//       {/* <div className='voice-button'>
//         <Button onClick={handleStartListening}>Start Listening</Button>
//       </div> */}
//       {transcript && handleVoiceNavigation(transcript)}
//     </div>
//   );
// };

// export default App;





import React, { useEffect } from 'react';
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
import { Layout, Typography, Space, Button } from 'antd';
import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  News,
  Login,
  Signup,
  ProtectedRoute,
  CoinsTable,
  Exchanges,
  CryptoDetails,
  CoinPage,
} from './components';
import { UserAuthContextProvider } from './context/UserAuthContext';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import annyang from 'annyang';
import './App.css';

const App = () => {
  const navigate = useNavigate();
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const handleVoiceNavigation = (command) => {
    switch (command.toLowerCase()) {
      case 'home':
        navigate('/home');
        break;
      case 'cryptocurrencies':
        navigate('/coinstable');
        break;
      case 'news':
        navigate('/news');
        break;
      
      default:
        console.log('Command not recognized:', command);
    }
  };

  const handleStartListening = () => {
    resetTranscript();
    if (annyang) {
      annyang.start({ autoRestart: true, continuous: false });
      annyang.addCommands({ '*command': handleVoiceNavigation });
    } else {
      console.error('Annyang is not available.');
    }
  };

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      console.error('Speech recognition is not supported in this browser.');
    }
  }, [browserSupportsSpeechRecognition]);

  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <UserAuthContextProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<ProtectedRoute><Homepage /></ProtectedRoute>} />
                <Route path="/cryptocurrencies" element={<ProtectedRoute><Cryptocurrencies /></ProtectedRoute>} />
                <Route path="/news" element={<ProtectedRoute><News /></ProtectedRoute>} />
                <Route exact path="/coins/:id" element={<ProtectedRoute> <CoinPage/> </ProtectedRoute>}/> 
                <Route path="/coinstable" element={<ProtectedRoute><CoinsTable /></ProtectedRoute>} />
           
              </Routes>
            </UserAuthContextProvider>
          </div>
        </Layout>
        <div className='voice-button'>
          <Button onClick={handleStartListening}>Start Listening</Button>
        </div>
        <div className='footer'>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            DigiCoin<br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/home'>Home</Link>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            <Link to='/news'>News</Link>
          
          </Space>
        </div>
      </div>
      {transcript && handleVoiceNavigation(transcript)}
    </div>
  );
};

export default App;



