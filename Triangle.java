import java.util.*;
class Triangle 
{
	public static void main(String[] args)
	{
        	Scanner sc=new Scanner(System.in);
		System.out.println("Enter side 1:");
		double a=sc.nextDouble();
		System.out.println("Enter side 2:");
		double b = sc.nextDouble();
		System.out.println("Enter side 3:");
		double c = sc.nextDouble();
		double perimeter = a + b + c;
		double s = perimeter / 2;
		double area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
		System.out.println("Perimeter: " + perimeter);
		System.out.println("Area: " + area);
	}
}
