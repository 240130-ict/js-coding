const setTimeoutPromise = (ms) => new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
});
// setTimeoutPromise(1000).then(()=>{
//     console.log('1초 뒤에 실행됩니다.');
// });
// console.log('내가 먼저');

async function main(){
    await setTimeoutPromise(1000);
    console.log('1초 뒤에 실행됩니다.');
    console.log('내가 나중에');
}

main();