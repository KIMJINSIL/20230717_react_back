
export const getJoonguFoods = async(req,res) => {
    console.log("api");
    await fetch("https://api.odcloud.kr/api/15052602/v1/uddi:855807e2-fe8a-4e47-8a5a-ce1894e410d7_201909031553?page=1&perPage=10&serviceKey=HJ7ZGPx9iDuXTY50FfpMkImzOTWMbkCo6KJBZgSv%2BsK3%2BPjAWJCmqARQ0XIKT7u9z812boJvUSFcN9JNmhAkqQ%3D%3D")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        res.send(data);
    })
}