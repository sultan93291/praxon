import Container from "../container/Container";
import HealthCareOne from "../../assets/images/healthcare1.png";
import HealthCareTwo from "../../assets/images/healthcare2.png";
import HealthCareThree from "../../assets/images/healthcare3.png";
import HealthCareFour from "../../assets/images/healthcare4.png";
import HealthCareFive from "../../assets/images/healthcare5.png";
import HealthCareSix from "../../assets/images/healthcare6.png";
import HealthCareSeven from "../../assets/images/healthcare7.png";
import HealthCareEight from "../../assets/images/healthcare8.png";
import HealthCareNine from "../../assets/images/healthcare9.png";
import HealthCareTen from "../../assets/images/healthcare10.png";
import HealthCareEleven from "../../assets/images/healthcare11.png";
import HealthCareTwelve from "../../assets/images/healthcare12.png";
import RevolutionCard from "./RevolutionCard";
import SpeakWithExpert from "../common/SpeakWithExpert";
import ElipsOne from "../../assets/images/elips1.png"
import ElipsTwo from "../../assets/images/elips2.png"
import ElipsThree from "../../assets/images/elips3.png"

const caseStudies = [
  {
    id: 1,
    category: "AI Solutions",
    title:
      "Machine Learning Risk Prediction of Mortality for Patients Undergoing Surgery with Preoperative SARS-CoV-2: The COVIDSurg Mortality Score",
    challenge:
      "The COVID-19 pandemic led to the postponement of millions of surgeries globally due to high postoperative pulmonary complications (51.2%) and mortality rates (23.8%) among patients with perioperative SARS-CoV-2 infection. A globally applicable tool was urgently needed to predict individualized mortality risk and facilitate shared decision-making for safe surgical procedures.",
    solutions: [
      "Needs Assessment: A comprehensive cohort study was conducted across 756 hospitals in 69 countries, capturing data from 8,492 patients who underwent surgery with perioperative SARS-CoV-2 infection.",
      "Model Development: Leveraging machine learning techniques, 78 predictive models were developed using patient and operative variables. The final model, a logistic regression-based score, incorporated age, ASA grade, Revised Cardiac Risk Index (RCRI), and preoperative respiratory support as the most critical predictors.",
      "Validation: The model demonstrated robust performance across geographic regions and time, achieving AUROCs of 0.73 in the derivation set and 0.80 in the validation set.Deployment: The COVIDSurg Mortality Score was implemented via an accessible web app, enabling global adoption for clinical decision-making.",
    ],
    results: [
      "Facilitated risk stratification for surgical patients with perioperative SARS-CoV-2.",
      "Enhanced informed consent and postoperative care planning",
      "Provided a scalable, globally validated tool for improving surgical outcomes during the ",
    ],
    actionLabel: "See More",
    actionLink: "/",
    images: [HealthCareOne, HealthCareTwo, HealthCareThree, HealthCareFour],
    isReversed: false,
  },
  {
    id: 2,
    category: "Data analysis",
    title:
      "Diagnostic Performance of Al Algorithms for Identifying M2 Segment Middle Cerebral Artery Occlusions.",
    challenge:
      "Detecting medium vessel occlusions (MeVO), such as M2 segment occlusions, remains a diagnostic challenge in acute ischemic stroke, with limited evidence supporting the efficacy of artificial intelligence (AI) algorithms for this purpose.",
    solutions: [
      "Needs Assessment: A systematic review and meta-analysis were conducted to evaluate the diagnostic performance of Al platforms for M2 occlusion detection. Eight studies were included, providing sensitivity and specificity data for analysis.Data Analysis: Advanced statistical tools, including pooled sensitivity (64%) and specificity (97%) estimates, were utilized. The overall diagnostic performance was measured through the area under the curve (AUC = 0.79) in the summary receiver operating charactecharacteristic (SROC) analysis.",
      "Interpretation: The study highlighted the potential of Al as an adjunctive diagnostic tool while identifying the need for further algorithm refinement.",
    ],
    results: [
      "Confirmed the viability of Al algorithms as supplementary tools for detecting M2 occlusions.",
      "Provided a benchmark for future development and validation of Al-driven diagnostic technologies.",
      "Identified significant heterogeneity and underscored the importance of continuous algorithm enhancement.",
    ],
    actionLabel: "See More",
    actionLink: "/",
    images: [HealthCareFive, HealthCareSix, HealthCareSeven, HealthCareEight],
    isReversed: true,
  },
  {
    id: 3,
    category: "computer vision",
    title:
      "Prediction of Delayed Cerebral Ischemia Following Aneurysmal Subarachnoid Hemorrhage.",
    challenge:
      "Delayed cerebral ischemia (DCI) is a severe complication of aneurysmal subarachnoid hemorrhage (aSAH) that adversely affects patient outcomes. Current prediction methods lack accuracy and clinical utility.",
    solutions: [
      "Model Development: Six machine learning models, including random forest and multilayer perceptron (MLP), were trained on patient data to predict DCI. Key features, such as clinical vasospasm, were identified as critical predictors.",
      "Performance Evaluation: The MLP model achieved the best performance, with an accuracy of 0.93, an F1 score of 0.85, and an AUC of 0.85, making it a reliable tool for DCI risk stratification.",
      "Implementation: The study emphasized the potential of machine learning for enhancing clinical decision-making, while advocating for further validation and real-world testing.",
    ],
    results: [
      "Demonstrated the superiority of the MLP model for predicting DCI.",
      "Enabled improved risk stratification and personalized care for patients with aSAH.",
      "Highlighted the transformative potential of machine learning in neurovascular care.",
    ],
    actionLabel: "See More",
    actionLink: "/",
    images: [HealthCareNine, HealthCareTen, HealthCareEleven, HealthCareTwelve],
    isReversed: false,
  },
];


function RevolutionizingSection() {
  return (
    <section className=" pt-[150px] pb-[40px] 2xl:pb-[130px] relative z-[1]">
      <Container>
        <div>
          {/* title  */}
          <div className="text-center xl:w-[700px]  3xl:w-[1224px] mx-auto">
            <p
              className="text-[18px] border border-btnBg rounded-[100px] text-btnBg py-3 px-[30px] inline-block"
              data-aos="fade-up"
            >
              Healthcare Case Studies
            </p>
            <h1
              className="mt-8 title--lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Revolutionizing Healthcare Through AI Innovation
            </h1>
            <p
              className="text-[18px] text-paragraphColor mt-7 leading-[30px]"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              At Praxon AI, we leverage cutting-edge AI technologies to
              revolutionize industries and drive success. From streamlining
              healthcare operations to elevating customer experiences in retail,
              our tailored solutions are crafted to address the specific demands
              of your industry.
            </p>
          </div>
          <div>
            {caseStudies.map((item) => (
              <RevolutionCard key={item.id} item={item} />
            ))}
          </div>
          <div className=" pt-[40px] 2xl:pt-[128px]">
            <SpeakWithExpert />
          </div>
        </div>
      </Container>
      {/* shapes  */}
      <div>
        <img
          className="absolute top-0 left-0 z-[-1]"
          src={ElipsOne}
          alt=""
          data-aos="fade-in"
        />
        <img
          className="absolute top-[35%] right-[0] z-[-1]"
          src={ElipsTwo}
          alt=""
          data-aos="fade-in"
        />
        <img
          className="absolute top-[50%] left-0 z-[-1]"
          src={ElipsThree}
          alt=""
          data-aos="fade-in"
        />
      </div>
    </section>
  );
}

export default RevolutionizingSection;
