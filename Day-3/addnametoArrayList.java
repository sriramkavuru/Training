import java.util.*;

class addnametoArrayList 
{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> names = new ArrayList<>();

        System.out.print("Enter a name: ");
        String name = sc.nextLine();

        names.add(name);  
        System.out.println( names.get(0));
    }
}
