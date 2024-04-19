import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/* a shorter way to do the core concept using map  */}
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
    
        </ul>
      </section>
    );
}