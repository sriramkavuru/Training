import java.util.*;
public class Union 
{
    	public static void main(String[] args) 
	{
        	Set<Integer> set1 = new HashSet<>();
        	set1.add(1);
        	set1.add(2);
        	set1.add(3);
        	set1.add(4);
        	Set<Integer> set2 = new HashSet<>();
        	set2.add(3);
        	set2.add(4);
        	set2.add(5);
        	set2.add(6);
        	System.out.println("Set 1: " + set1);
        	System.out.println("Set 2: " + set2);
        	Set<Integer> union = fUni(set1, set2);
        	System.out.println("Union: " + union);
		Set<Integer> intersection = fInt(set1, set2);
        	System.out.println("Intersection: " + intersection);
    	}
    	public static Set<Integer> fUni(Set<Integer> set1, Set<Integer> set2) 	
	{
        	Set<Integer> u=new HashSet<>(set1);
        	u.addAll(set2);
        	return u;
    	}
    	public static Set<Integer> fInt(Set<Integer> set1, Set<Integer> set2) 
	{
        	Set<Integer> i=new HashSet<>(set1);
        	i.retainAll(set2);
        	return i;
    	}
}
