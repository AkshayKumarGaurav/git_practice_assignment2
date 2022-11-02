
  
    let count=0;
    for(i=1;i<=number;i++)
    {
        if(number%i==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        console.log(number,"is a prime");
    }
    else
    {
        console.log(number,"is not a prime");
    }
  }
  check_prime(10);
  