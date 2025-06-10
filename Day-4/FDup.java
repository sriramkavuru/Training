import java.util.*;
public class FDup
{
    	public static Set<Integer> fDupEle(int[] arr) 
	{
        	Set<Integer> dup=new HashSet<>();
        	Set<Integer> s=new HashSet<>();
        	for (int num : arr) 
		{
            		if (s.contains(num)) 
			{
                		dup.add(num);
            		} 
			else 
			{
                		s.add(num);
            		}
        	}
        	return dup;
    	}
    	public static void main(String[] args) 
	{
        	Scanner sc=new Scanner(System.in);
        	System.out.print("Enter the number of elements ");
        	int n = sc.nextInt();
        	int[] array = new int[n];
        	System.out.println("Enter the elements of the array:");
        	for(int i = 0; i < n; i++) 
		{
            		array[i] = sc.nextInt();
        	}
        	Set<Integer> duplicateElements = fDupEle(array);
       		System.out.println("Original Array: ");
        	for (int num : array) 
		{
            		System.out.print(num + " ");
        	}
        	System.out.println();
        	System.out.println("Duplicate Elements: " + duplicateElements);
    	}
}
