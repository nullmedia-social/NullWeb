// Function to handle setting the selected story and placeholders
function setStory(storyNumber) {
    // Define the stories and their placeholders
    var stories = {
        num1: {
            story: `Once upon a time in a faraway WORD1, there was a WORD2 who loved to WORD3. Every WORD4, they would gather with their friends, a WORD5 and a WORD6, to WORD7 by the WORD8. But one day, the WORD9 changed everything, and they found themselves facing a wild WORD10. In the end, they had to WORD11 in order to escape the WORD12, but they felt WORD13 after their daring adventure.`,
            placeholders: [
                "place", "adjective", "verb", "time of day", "animal", "adjective", "verb", "noun", "emotion", "animal", "verb", "noun", "emotion"
            ]
        },
        num2: {
            story: `In a small WORD1, there was a WORD2 who loved to WORD3. Every WORD4, they would WORD5 around the WORD6 to collect WORD7. One WORD8, they found a mysterious WORD9 that led them to a WORD10 adventure! With a WORD11 heart, they WORD12 to the WORD13 and lived happily ever after.`,
            placeholders: [
                "place", "adjective", "verb", "time of day", "verb", "location", "noun", "time of year", "noun", "adjective", "verb", "noun", "emotion"
            ]
        },
        num3: {
            story: `It was a WORD1 day in the WORD2 as WORD3 went to the WORD4 to meet their WORD5. Along the way, they saw a WORD6 who was WORD7. They decided to WORD8 together and have a WORD9 adventure in the WORD10. By the end of the day, they were both WORD11 and promised to WORD12 the next day.`,
            placeholders: [
                "adjective", "place", "name", "location", "relative", "animal", "verb", "verb", "adjective", "place", "emotion", "verb"
            ]
        },
        num4: {
            story: `On a WORD1 day in the WORD2, WORD3 decided to WORD4 on an epic journey. With a WORD5 WORD6 and a WORD7 WORD8, they ventured to the WORD9 to search for the WORD10. Along the way, they met a WORD11 WORD12 who helped them overcome a WORD13.`,
            placeholders: [
                "adjective", "place", "name", "verb", "adjective", "animal", "verb", "noun", "adjective", "place", "emotion", "animal", "noun"
            ]
        },
        num5: {
            story: `In a world where WORD1 and WORD2 lived side by side, a WORD3 was searching for a WORD4 to WORD5 them. But when they encountered a WORD6, they realized they had to WORD7 it before it was too late! With WORD8 determination, they WORD9 through the WORD10 and eventually WORD11 the WORD12.`,
            placeholders: [
                "adjective", "adjective", "noun", "verb", "adjective", "animal", "verb", "verb", "adjective", "place", "verb", "noun"
            ]
        },
        num6: {
            story: `In the heart of the WORD1, a WORD2 was WORD3 when they saw a WORD4 WORD5 approaching. They decided to WORD6 and WORD7 their WORD8 to escape. As they ran, they encountered a WORD9 who offered to WORD10 them. In the end, they were WORD11 and vowed to WORD12 every WORD13.`,
            placeholders: [
                "place", "animal", "verb", "adjective", "noun", "verb", "verb", "noun", "animal", "verb", "emotion", "verb", "noun"
            ]
        },
        num7: {
            story: `On a bright WORD1 morning, WORD2 set out on a WORD3 adventure. With their WORD4 in hand and a WORD5 in their heart, they journeyed through the WORD6 forest. Along the way, they discovered a WORD7 hidden behind a WORD8 rock. As they explored, they met a WORD9 who gave them a WORD10 gift.`,
            placeholders: [
                "adjective", "name", "adjective", "object", "emotion", "place", "noun", "adjective", "animal", "noun"
            ]
        },
        num8: {
            story: `At the WORD1 of the WORD2, a WORD3 was WORD4 in search of WORD5 who had WORD6 them. They journeyed through the WORD7 mountain and crossed the WORD8 river to find the WORD9 that held the WORD10 they were after. With WORD11 and WORD12 determination, they succeeded and became a WORD13.`,
            placeholders: [
                "time", "place", "adjective", "verb", "person", "verb", "adjective", "geographical feature", "object", "adjective", "emotion", "verb", "noun"
            ]
        },
        num9: {
            story: `In a WORD1 kingdom, a WORD2 named WORD3 was known for WORD4 with WORD5 animals. One day, they found a WORD6 and decided to WORD7 it to the WORD8 to help WORD9. On their journey, they came across a WORD10 who challenged them to WORD11 for WORD12.`,
            placeholders: [
                "adjective", "animal", "name", "verb", "adjective", "noun", "verb", "place", "noun", "animal", "verb", "noun"
            ]
        },
        num10: {
            story: `In a WORD1 city, a WORD2 was WORD3 to WORD4 the WORD5 that had been lost. With their WORD6 and WORD7, they followed the WORD8 trail. Along the way, they encountered a WORD9 who offered to WORD10 them in exchange for WORD11. Together, they WORD12 the WORD13 and became heroes.`,
            placeholders: [
                "adjective", "animal", "verb", "verb", "noun", "adjective", "noun", "place", "noun", "verb", "noun", "verb", "noun"
            ]
        }
    };

    // Get the selected story's key
    const selectedStoryKey = 'num' + storyNumber;
    const selectedStory = stories[selectedStoryKey];

    // Update the input field placeholders dynamically based on the selected story
    const inputs = document.querySelectorAll('#input-fields input');
    inputs.forEach((input, index) => {
        // Set the placeholder for each input based on the story's placeholders
        input.placeholder = selectedStory.placeholders[index];
    });

    // Add an event listener for generating the story once the user fills out the fields
    document.getElementById('generate-story').onclick = function () {
        let filledStory = selectedStory.story;

        // Replace placeholders (e.g., WORD1, WORD2) with the values entered by the user
        for (let i = 1; i <= 13; i++) {
            let wordValue = document.getElementById('word' + i).value;
            filledStory = filledStory.replace(`WORD${i}`, wordValue);  // Replace 'WORDX' with the value
        }

        // Display the final generated story
        document.getElementById('story').textContent = filledStory;
    };

    // Clear the story area initially
    document.getElementById('story').textContent = "Please fill in the blanks above and click 'Generate Story' to see the magic!";
}