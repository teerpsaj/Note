 function checkPassword() {
    const password = document.getElementById("passwordInput").value.toLowerCase();
    const messageBox = document.getElementById("message");

    if (password === "jujutsu kaisen") {
      messageBox.innerHTML =    `
        <p>
          <strong>Your message(Yaar manu free di wishes lan di adat  nai va maybe next time ge jinda rahu ek present jarur dauga.)</strong>
           Bus mein ahi kehnaa aa ke next time please koi present na hi devi free de gift laina meinu pasand nahi aa.
           jo tu pehla chocolate box dita c usdi kaafi tension je tu next time fir kuj de ditta te depression hi ho jaana theek.
           please na kuj devi okay.
           mera vi chocolate wala hisaab pending ch os nu v clear karna hi jo ke tu pehla nahi karan ditta c.
           tu buss hello hi de de

           <strong>agar kuj deina aa te ehna questions de answer dei theek  </strong>
           1st: unique idea for the website?
           2nd: je kisse website ch letter nu modify(all letters nu copy te likh ke design karke website ch add karna   ) kitta te sahi laggega ja nahi?
          

        </p>
      `;
    } else {
      messageBox.innerHTML = "<p style='color:red;'>Incorrect password. Try again.</p>";
    }
  }