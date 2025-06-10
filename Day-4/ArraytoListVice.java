import java.util.*;
class ArraytoListVice
{
	public static void main(String args[])
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the size ");
		int n=sc.nextInt();
		int a[]=new int[n];
		System.out.println("Enter the array elements:");
		for(int i=0;i<n;i++)
		{
			a[i]=sc.nextInt();
		}
		List<Integer> lfa=ArraytoList(a);
		System.out.println("List from array: " + lfa);
		System.out.println("Enter the list elements ");
		List<Integer>l=new ArrayList<Integer>();
		for(int i=0;i<n;i++)
		{
			int x=sc.nextInt();
			l.add(x);
		}
		int[] afl=ListtoArray(l);
		System.out.println("Array from list: " + Arrays.toString(afl));
	}
	public static List<Integer> ArraytoList(int a[])
	{
    		Integer[] arr = Arrays.stream(a).boxed().toArray(Integer[]::new);
    		return Arrays.asList(arr);
	}
	public static int[] ListtoArray(List<Integer> l)
	{
    		return l.stream().mapToInt(Integer::intValue).toArray();
	}
}

		