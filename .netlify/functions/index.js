async function processEnv(event, context) {
  const value = process.env.secretValue;

  await return {
	statusCode: 200,
	body: JSON.stringify({ message: `Value of MY_IMPORTANT_VARIABLE is ${value}.` }),
  };
  console.log(value);  
};
console.log(processEnv());