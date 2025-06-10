import java.util.*;

public class addnamesintohashmap 
{
    public static void main(String[] args) {
        HashMap<Integer, String> h = new HashMap<>();
        h.put(1, "Tarun");
        h.put(2, "Chaitu");
        h.put(3, "Satish");
        System.out.println("Student List:");
        System.out.println("Rollno       Name");
        for (Integer rollNo : h.keySet()) {
            System.out.println( rollNo +"           "+ h.get(rollNo));
        }
    }
}
