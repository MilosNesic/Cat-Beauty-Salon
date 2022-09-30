import TreatmentsIntro from "./TreatmentsIntro";
import { Fragment, useEffect, useState } from "react";
import classes from "./Treatments.module.css";
import Card from "../UI/Card";
import TreatmentItem from "./Treatment/TreatmentItem";

const Treatments = () => {
  const [arrayTreatments, setArrayTreatments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchTreatments = async () => {
      const response = await fetch(
        "https://cat-salon-default-rtdb.firebaseio.com/treatments.json"
      );
      const responseData = await response.json();
      const loadedTreatments = [];
      for (const key in responseData) {
        const newTreatment = {
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        };
        loadedTreatments.push(newTreatment);
      }
      setArrayTreatments(loadedTreatments);
      setIsLoading(false);
    };
    fetchTreatments();
  }, []);

  if(isLoading){
    return(
      <section>
        <p className={classes.loading}>LOADING...</p>
      </section>
    );
  }

  const listOfTreatments = arrayTreatments.map((treatment) => (
    <TreatmentItem
      id={treatment.id}
      key={treatment.id}
      name={treatment.name}
      description={treatment.description}
      price={treatment.price}
    />
  ));

  return (
    <Fragment>
      <TreatmentsIntro />
      <section className={classes.treatments}>
        <Card>
          <ul>{listOfTreatments}</ul>
        </Card>
      </section>
    </Fragment>
  );
};

export default Treatments;
