const wordList = [
    {
        word : "jscript",
        hint:"top web programming lang"
    },
    {
        word : "shuttle",
        hint:"one of the best game"
    },
    {
        word : "school",
        hint:"memories hub in life"
    },
    {
        word : "maths",
        hint:"most important subject ever"
    },
    {
        word : "kabaddi",
        hint:"india's traditional game"
    },
    {
        word : "forest",
        hint:"nature's gift"
    },
    {
        word : "house",
        hint:"people live together"
    },
    {
        word : "bublgum",
        hint:" famous chewing gum"
    },
    {
        word : "rahul",
        hint:"Raid machine"
    },
    {
        word : "golang",
        hint:"new programming lang"
    }

]

const inputSpace=document.querySelector(".input-space")
const spanTag=document.querySelectorAll("span")
const userInput=document.querySelector(".user-input")
const button=document.querySelector("button")
let word,maxGuesses,inCorrects=[],corrects=[]


function randomWord()
{
    inCorrects=[]
    corrects=[]
    spanTag[2].innerHTML=""
    let randomObj=wordList[Math.floor(Math.random()*wordList.length)]
    //console.log(randomObj)
    word=randomObj.word
    maxGuesses=Math.floor(word.length/2)
    
    //console.log(maxGuesses)
    spanTag[1].innerHTML=maxGuesses
    
    let html=""
    for(let i=0;i<word.length;i++)
    {
        html += ` <input type="text" class="letter" disabled>`
    }
    inputSpace.innerHTML=html
    let hint=randomObj.hint
    spanTag[0].innerHTML=hint
    userInput.addEventListener("keydown",userInput.focus())
    userInput.addEventListener("click",userInput.focus())


}
randomWord()
button.addEventListener("click",randomWord)
userInput.addEventListener("keydown",userInput.focus())
userInput.addEventListener("click",userInput.focus())

userInput.addEventListener("input",(e)=>{
    let key=e.target.value//e.target returns its container i.e input here
    //console.log(key)
    if(key.match(/^[A-z]+$/) && !inCorrects.includes(` ${key}`) && !corrects.includes(key) )
    {
        //console.log(key)
        if(word.includes(key))
        {
            for(i=0;i<word.length;i++)
            {
                if(word[i]===key)
                {
                    corrects.push(key)
                    //corrects+=key
                    inputSpace.querySelectorAll(".letter")[i].value=key
                }
            }
        }
        else{
            maxGuesses--;
          inCorrects.push(` ${key}`)
        }
        spanTag[2].innerHTML=inCorrects
        spanTag[1].innerHTML=maxGuesses
    }
   
    userInput.value=""//to empty the userInput and to give chance for another letter becoz we give maxlength=1
    
    setTimeout(()=>{
    if(word.length===corrects.length)
    {
       
        alert("Congrats you won")
        setTimeout(randomWord,500)
    }
    else if(maxGuesses==0)
    {
        alert("game over")
        for(i=0;i<word.length;i++)
        {
            inputSpace.querySelectorAll(".letter")[i].value=word[i]

        }
        setTimeout(randomWord,2000)
    }
    },250)
})