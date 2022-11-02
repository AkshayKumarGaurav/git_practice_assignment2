function check_prime(num){
  
    let count=0;
    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        console.log(num,"is a prime");
    }
    else
    {
        console.log(num,"is not a prime");
    }
  }
  check_prime(10);
  