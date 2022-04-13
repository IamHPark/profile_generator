const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)`, (answer) => {
  console.log(`Your nickname is : ${answer}`);
  rl.question(`What's an activity you like doing? `, (answer) => {
    console.log(`Activity you like to do is : ${answer}`);
    rl.question(`What do you listen to while doing that?`, (answer) => {
      console.log(`You listen: ${answer}`);
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer) => {
        console.log(`Your favourite meal is : ${answer}`);
        rl.question(`Which sport is your absolute favourite? `, (answer) => {
          console.log(`Your favourite sport is : ${answer}`);
          rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
            console.log(`Your superpower is : ${answer}`);
            rl.close();
         });
       });
     });
    });
  });
});                                                                                                                                                                                                                                                                                                                   