const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

const getMessages = () => {
    console.log(messages)
    return messages;
    
}

const updateMessages = (item) => {
    messages.push(item);
    return;
}

const queryMessage = (i) => {
    return messages[i];
}

module.exports = {getMessages, updateMessages, queryMessage};