import React, { useState, useEffect } from "react";
//@ts-ignore
import TagManager from "react-gtm-module";
import axios from "axios";
import "./styles.scss";

import { scrollTo } from "../utils";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head_bg from "../assets/crash.jpg";
import HeaderLogo from "../assets/sawal.png";
import aa from "../assets/last.png";
import Headline from "../assets/headline_spandeb1.png";
import {  Link } from 'react-router-dom';
// google tag manager

const tagManagerArgs = {
  gtmId: "GTM-KZJBC3B",
};

TagManager.initialize(tagManagerArgs);

export default function Fifth_SP() {

  const SlideUp = cssTransition({
    enter: "toast-enter",
    exit: "toast-exit",
  });
  
  const messages = [
    "Emily A. Rodriguez from Miami, FL just qualified for a $3,600 Grocery Allowance.",
    "Michael D. Johnson from Dallas, TX just qualified for a $3,600 Grocery Allowance.",
    "Sophia L. Thompson from Los Angeles, CA just qualified for a $3,600 Grocery Allowance.",
    "Ethan M. Baker from Chicago, IL just qualified for a $3,600 Grocery Allowance.",
    "Ava K. Campbell from Seattle, WA just qualified for a $3,600 Grocery Allowance."
  ];
  
  // Function to shuffle array in place
  const shuffleArray = (array:any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  
  shuffleArray(messages);
  
  const notify = (message:any) => {
    // Dismiss all existing toasts
    toast.dismiss();
    let boldedMessage = message;
  
    // Make the word "Allowance" bold in all lines
    boldedMessage = boldedMessage.replace(
      /\$3,600 Grocery Allowance/g,
      '<strong class="green-bold">$3,600 Grocery Allowance</strong>'
    );
  
    // Make specific dollar amounts bold only in specific lines
    const specialAmounts = ["$16,800", "$16,800", "$16,800", "$16,800"];
    specialAmounts.forEach((amount) => {
      if (message.includes(amount)) {
        boldedMessage = boldedMessage.replace(
          amount,
          `<strong class="green-bold">${amount}</strong>`
        );
      }
    });
  
    // Show new toast
    toast(<div dangerouslySetInnerHTML={{ __html: boldedMessage }} />, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      closeButton: false,
    });
  };
  
  useEffect(() => {
    const delayedEffect = setTimeout(() => {
      // Create a function to handle the logic
      const showRandomToast = () => {
        const randomTime = 6000;
        const randomMessage =
          messages[Math.floor(Math.random() * messages.length)];
        notify(randomMessage);
        return randomTime;
      };
  
      // Show the first toast
      let nextTime = showRandomToast();
  
      // Set up a recurring timer
      const timer = setInterval(() => {
        nextTime = showRandomToast();
      }, nextTime);
  
      // Cleanup
      return () => {
        clearInterval(timer);
      };
    }, 6000); // 6-second delay before the useEffect code runs
  
    // Cleanup for the setTimeout
    return () => {
      clearTimeout(delayedEffect);
    };
  }, []);
  
  // const [zipCode, setZipCode] = useState("");
  // useEffect(() => {
  //   const fetchUserLocation = async () => {
  //     try {
  //       const response = await axios.get("https://ipapi.co/json/");
  //       console.log('response',response.data);
  //       setZipCode(response.data.postal);
  //     } catch (error) {
  //       console.error("Error fetching user location:", error);
  //     }
  //   };

  //   fetchUserLocation();
  // }, []);
  useEffect(() => {
    window.document.title = "Seniors Saving Journal";

    axios
      .get(process.env.REACT_APP_PROXY + `/visits/8`)
      .then(({ data }) => {
        if (data.length === 0) {
          const visits = {
            visits: 1,
            views: 0,
            calls: 0,
            positives: 0,
            negatives: 0,
          };

          axios
            .post(
              process.env.REACT_APP_PROXY + `/visits/create-visits8`,
              visits
            )
            .catch((err) => console.log(err));
        } else {
          const _id = data[0]._id;
          const _visits = data[0].visits;
          const _views = data[0].views;
          const _calls = data[0].calls;
          const _positives = data[0].positives;
          const _negatives = data[0].negatives;

          const visits = {
            visits: _visits + 1,
            views: _views,
            calls: _calls,
            positives: _positives,
            negatives: _negatives,
          };
          axios
            .put(
              process.env.REACT_APP_PROXY + `/visits/update-visits8/` + _id,
              visits
            )
            .catch((err) => console.log(err));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCall = () => {
    axios.get(process.env.REACT_APP_PROXY + `/visits/8`).then(({ data }) => {
      const _id = data[0]._id;
      const _visits = data[0].visits;
      const _views = data[0].views;
      const _calls = data[0].calls;
      const _positives = data[0].positives;
      const _negatives = data[0].negatives;
      const visits = {
        visits: _visits,
        views: _views,
        calls: _calls + 1,
        positives: _positives,
        negatives: _negatives,
      };
      axios
        .put(
          process.env.REACT_APP_PROXY + `/visits/update-visits8/` + _id,
          visits
        )
        .catch((err) => console.log(err));
    });
  };

  const [quiz, setQuiz] = useState("Select Your Age:  ");
  const [step, setStep] = useState("process");
  const [min, setMin] = useState(3);
  const [second, setSecond] = useState<any>(0);
  const [yes,setYes]=useState("55-64")
  const [no,setNo]=useState("65-74")
  const [third,setThird]=useState("75+")
  const [fourth, setFourth] = useState("Under 55");
  

  const stepProcess = () => {
    if (step === "Reviewing Your Answers...") {
      setTimeout(() => {
        setStep("Matching With Best Options...");
      }, 1500);
    }
    if (step === "Matching With Best Options...") {
      setTimeout(() => {
        setStep("Confirming Eligibility...");
      }, 1500);
    }
    if (step === "Confirming Eligibility...") {
      setTimeout(() => {
        setStep("completed");

        axios
          .get(process.env.REACT_APP_PROXY + `/visits/8`)
          .then(({ data }) => {
            const _id = data[0]._id;
            const _visits = data[0].visits;
            const _views = data[0].views;
            const _calls = data[0].calls;
            const _positives = data[0].positives;
            const _negatives = data[0].negatives;
            const visits = {
              visits: _visits,
              views: _views + 1,
              calls: _calls,
              positives: _positives,
              negatives: _negatives,
            };
            axios
              .put(
                process.env.REACT_APP_PROXY + `/visits/update-visits8/` + _id,
                visits
              )
              .catch((err) => console.log(err));
          });
      }, 1500);
    }

    if (step === "completed") {
      const startTime: any = new Date();
      const timer = setInterval(() => {
        const nowTime: any = new Date();
        setSecond((180 - Math.round((nowTime - startTime) / 1000)) % 60);
        setMin(
          Math.floor((180 - Math.round((nowTime - startTime) / 1000)) / 60)
        );
      }, 1000);
    }
  };

  useEffect(() => {
    stepProcess();
  }, [step]);

  const topScroll = (id: any) => {
    scrollTo({ id });
  };

  const handleQuizP = () => {
    topScroll("btn");
    if (quiz === "Select Your Age:  ") {
      setYes("Yes")
      setNo("No")
      setThird("Skip")
      setFourth("No");
      
      setQuiz("Are you on Medicare Parts A & B?");
    } else {
      setStep("Reviewing Your Answers...");
     
      topScroll("top");
    }

    axios.get(process.env.REACT_APP_PROXY + `/visits/8`).then(({ data }) => {
      const _id = data[0]._id;
      const _visits = data[0].visits;
      const _views = data[0].views;
      const _calls = data[0].calls;
      const _positives = data[0].positives;
      const _negatives = data[0].negatives;
      const visits = {
        visits: _visits,
        views: _views,
        calls: _calls,
        positives: _positives + 1,
        negatives: _negatives,
      };
      axios
        .put(
          process.env.REACT_APP_PROXY + `/visits/update-visits8/` + _id,
          visits
        )
        .catch((err) => console.log(err));
    });
  };

  const handleQuizN = () => {
    topScroll("btn");
    if (quiz === "Are you over the age of 60?  ") {
      setYes("Yes")
      setNo("No")
      setThird("Skip")
      setFourth("Skip");
      setQuiz("Are you on Medicare Parts A & B?");
    } else {
      setStep("Reviewing Your Answers...");
    
      topScroll("top");
    }

    axios.get(process.env.REACT_APP_PROXY + `/visits/8`).then(({ data }) => {
      const _id = data[0]._id;
      const _visits = data[0].visits;
      const _views = data[0].views;
      const _calls = data[0].calls;
      const _positives = data[0].positives;
      const _negatives = data[0].negatives;
      const visits = {
        visits: _visits,
        views: _views,
        calls: _calls,
        positives: _positives,
        negatives: _negatives + 1,
      };
      axios
        .put(
          process.env.REACT_APP_PROXY + `/visits/update-visits8/` + _id,
          visits
        )
        .catch((err) => console.log(err));
    });
  };

  return (
    <div>
     {/* <ToastContainer /> */}
     <div  className="top-sticky-blue-test2" id="top">
     <img src={aa} alt="Description of " style={{ height: '74%', maxWidth: '74%', }} />
  </div>

      {step === "process" ? (
        <>
          <div className="main-container-5">
            
            <div className="main-descrition-5-5">
              
              <div className="main-des-title-6-7">
            
                <b>
                Medicare Beneficiaries May Be Eligible For New Benefits. Click Below To Check Eligibility.
                </b>
              </div>
              {/* <img className='topic-img-larger' src = {Headline} alt = "head"/> */}
              <img className="topic-img-middle-z" src={Head_bg} alt="head" />
              <div  style={{marginTop:'14px'}}className="main-des-5">
              {/* Americans over 65 years old may be eligible to claim the 2024 Grocery Allowance Card Americans may use the funds to fully cover their Groceries, Medicines, etc. */}
              <b>How it works:</b> Complete this survey to check your eligibility.
              </div>
              <div className="main-des-5"  style={{marginTop:'-5px'}}>
              {/* If you have not yet claimed your monthly allowance then answer the questions below and once approved <b>you will have your $3,600 Grocery Allowance mailed to you within a few days ready for use!</b> */}
              </div>
              {/* <div className='main-des-5' style = {{marginTop:"1rem"}}><b>Simplemente responda las siguientes preguntas:</b></div> */}
            </div>
            <div style={{marginTop:'-5px'}} className="survey">
              <div className="quiz-5" id="btn">
                {quiz}
              </div>
              <div  className="answer">
              {quiz === "Select Your Age:  " && <div className="answer-btn-5" onClick={handleQuizP} style={{"textTransform": "capitalize"}}>
              {fourth}
                </div>}
                <div className="answer-btn-5" onClick={handleQuizP}>
              {yes}
                </div>
                <div className="answer-btn-5" onClick={handleQuizN}>
              {no}
                </div>
               <div className="answer-btn-5" onClick={handleQuizP}>
              {third}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : step !== "process" && step !== "completed" ? (
        <div className="checking" style={{ fontWeight: "700" }}>
          {step}
        </div>
      ) : (
        <div className="checking">
          <div className="congrats">Congratulations!</div>
          <div className="top-description-5">
          Tap Below And Speak To A Licensed Insurance Agent About Medicare Plans you may be eligible for
          </div>
          {/* <div className="spots-count">Spots remaining: 4</div> */}
          <div className="tap-direction">👇 TAP BELOW TO CALL  👇</div>
          <a href="tel:+18446720874">
            <div className="call-btn" onClick={handleCall}>
            CALL (844) 672-0874 | TTY 711
            </div>
          </a>
          {/* <div className="sub-title">We Have Reserved Your Spot</div> */}
          <div className="sub-description">
          {/* Your spot is reserved so call within the next 5 minutes. */}
          </div>
          {/* <div className="timer">
            <div className="timer-cell">{min}</div>
            <div className="timer-cell">:</div>
            <div className="timer-cell">{second}</div>
          </div> */}
        </div>
      )}
      <div className="footer2">
      <p>We represent Medicare Advantage HMO, PPO and PFFS organizations and stand-alone PDP prescription drug plans that are contracted with Medicare. Enrollment depends on the plan’s contract renewal."
				</p>
				<p>Not all plans offer all of these benefits. Benefits may vary by carrier and location. Limitations and exclusions may apply.
				</p>
				<p>Enrollment in Medicare/Medicare Advantage may be limited to certain times of the year unless you qualify for a Special Enrollment Period

				</p>
				<p>seniorbeneficios.org is not connected with or endorsed by the US government or Federal Medicare program. This website is a solicitation for insurance and Medicare Advantage, Part D or Medicare supplement insurance comparison services. Medicare supplement insurance is available to those age 65 or older enrolled in Medicare Parts A and B, and in some states to those under age 65 eligible to Medicare due to disability or end stage renal disease.
				</p>
				<p>Please contact Medicare.gov, 1–800–MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options.</p>
        <div className="terms2">

        <Link to="/terms-and-conditions">Terms & Conditions</Link> | 
        <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div>
        
        <hr/>
        </div>
        <div className="copyright">
          
        
        </div>

<p>G2 Licensed Agent : Gregory K. Teipel</p>
        {/* <p>{zipCode} </p> */}
      </div>
      {/* <ToastContainer
        position="bottom-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
}
