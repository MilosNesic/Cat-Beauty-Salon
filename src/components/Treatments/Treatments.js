import TreatmentsIntro from "./TreatmentsIntro";
import { Fragment } from "react";
import classes from "./Treatments.module.css";
import Card from "../UI/Card";
import TreatmentItem from "./Treatment/TreatmentItem";

const arrayTreatments = [
  {
    id: "t1",
    name: "Bathing",
    description: "Finest animal-tested bath",
    price: 22.99,
  },
  {
    id: "t2",
    name: "Meow-Meow Styling",
    description: "After Bathing of course Styling",
    price: 56.5,
  },
  {
    id: "t3",
    name: "Claw Cutting",
    description: "We must not forget claws...",
    price: 14.99,
  },
  {
    id: "t4",
    name: "Grooming Tail",
    description: "Just for real lady-cats",
    price: 18.99,
  },
];

const Treatments = () => {
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
