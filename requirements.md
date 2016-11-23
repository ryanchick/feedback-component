## Create a "ui-kit" component:
- Highly composable: Provides a rich API to be used in multiple areas of the app
- Project-independent: Can be used in a different project simply by copy-pasting examples: https://github.com/BrainStationEducation/portal-react/tree/master/docs/components/ui-kit
- Think of Uber's 5star rating feedback form you're forced to do 
### Requirements:  
#### User features:  
- Users can easily click between 1 - 5 stars
- That will prompt a category click with relavent text (e.g., if user clicks 3 stars, promt "What could have gone better?" with a selection of categories)
- If the user clicks a category, it promts a text input box
- Only the stars are required to submit  
#### Developer features: The component must be flexible enough to
- Customize title and description
- Customize list of categories that gets promted
- Can have multiple questions (e.g., "rate class content" => "rate class environment")
- Only one question should be displayed at a time
- Submitting one question in a collection of questions will animate to the next question
