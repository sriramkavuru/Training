import java.util.*;
class ReverseString 
{
	public static void main(String[] args) 
	{
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a string:");
		String input = sc.nextLine();
		String reversed = reverse(input);
		System.out.println("Reversed string: " + reversed);
	}
	public static String reverse(String str) 
	{
		StringBuilder sb = new StringBuilder(str);
		return sb.reverse().toString();
	}
}
