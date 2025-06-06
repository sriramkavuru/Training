import java.util.*;
class Swap
{
	public static void main(String args[])
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter 1 number ");
		int a=sc.nextInt();
		System.out.println("Enter 2 number ");
		int b=sc.nextInt();
		int[] swapped = swap(a, b);
        	System.out.println("After swapping: " + swapped[0] + " " + swapped[1]);
	}
	public static int[] swap(int a, int b) 
	{
        	int x;
        	x = a;
        	a = b;
        	b = x;
        	return new int[] {a, b};
        }
}
		

		