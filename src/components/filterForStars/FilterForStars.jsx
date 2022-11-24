import React from "react";
import { useState } from "react";
import { ContainerFilter, TabFilter } from "./FilterForStars_styled";

const FilterForStars = () => {
   const [tabActiveYeah, setTabActiveYeah] = useState(false);
   const [tabActiveMeh, setTabActiveMeh] = useState(false);
   const [tabActiveBooh, setTabActiveBooh] = useState(false);

   function activeTab(option) {
      if (option == "yeah") {
         setTabActiveYeah(true);
         setTabActiveMeh(false);
         setTabActiveBooh(false);
      }
      if (option == "meh") {
         setTabActiveYeah(false);
         setTabActiveMeh(true);
         setTabActiveBooh(false);
      }
      if (option == "booh") {
         setTabActiveYeah(false);
         setTabActiveMeh(false);
         setTabActiveBooh(true);
      }
   }

   return (
      <ContainerFilter>
         <TabFilter isActive={tabActiveYeah} onClick={() => activeTab("yeah")}>
            YEAH!
         </TabFilter>
         <TabFilter isActive={tabActiveMeh} onClick={() => activeTab("meh")}>
            MEH
         </TabFilter>
         <TabFilter isActive={tabActiveBooh} onClick={() => activeTab("booh")}>
            BOOH!
         </TabFilter>
      </ContainerFilter>
   );
};

export default FilterForStars;
