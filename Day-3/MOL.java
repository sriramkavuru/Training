import java.util.*;
class MOL extends Human
{
    public static void main(String[] args) {
        Human h=new Human();
        h.add(2,4);
        h.add(2,4,6);
    }
}
class Human{
    public void start(){
        System.out.println("Hi this is Human");
    }
    public void add(int a,int b)
    {
        int c=a+b;
        System.out.println("Sum of two number is "+c);
    }
    public void add(int a,int b,int c)
    {
        int d=a+b+c;
        System.out.println("Sum of the three numbers is "+d);
    }
}