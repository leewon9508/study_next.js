export default function (req, res) {

  console.log('api/login');
  if (req.method === "POST") {
    debugger;
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Ape=3600;HttpOnly,Secure")
    res.statusCode = 200;
    res.json({message: "ok"})
  }
}

// data=${req.params};


