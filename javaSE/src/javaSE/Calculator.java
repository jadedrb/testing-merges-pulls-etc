package javaSE;

import java.util.Scanner;

public class Calculator {
	
	public static int add(Scanner scan) {
		
		int num1, num2;
		
		System.out.println("FIRST NUMBER:");
		num1 = scan.nextInt();
		
		System.out.println("SECOND NUMBER:");
		num2 = scan.nextInt();
		
		System.out.println("THE RESULT OF ADDING " + num1 + " AND " + num2 + " EQUALS:");
		
		return (num1 + num2);
	}
		
	public static int subtract(Scanner scan) {
		
		int num1, num2;
		
		System.out.println("FIRST NUMBER:");
		num1 = scan.nextInt();
		
		System.out.println("SECOND NUMBER:");
		num2 = scan.nextInt();
		
		System.out.println("THE RESULT OF SUBTRACTING " + num1 + " FROM " + num2 + " EQUALS:");
		
		return (num1 - num2);
	}
		
	public static int multiply(Scanner scan) {
		
		int num1, num2;
		
		System.out.println("FIRST NUMBER:");
		num1 = scan.nextInt();
		
		System.out.println("SECOND NUMBER:");
		num2 = scan.nextInt();
		
		System.out.println("THE RESULT OF MULTIPLYING " + num1 + " AND " + num2 + " EQUALS:");
		
		return (num1 * num2);
	}
		
	public static void divide(Scanner scan) {
		
		int num1, num2;
		
		System.out.println("FIRST NUMBER:");
		num1 = scan.nextInt();
		
		System.out.println("SECOND NUMBER:");
		num2 = scan.nextInt();
		
		System.out.println("AFTER DIVIDING " + num1 + " BY " + num2 + " YOU GET A");
		System.out.println("QUOTIENT OF: " + (num1 / num2));
		System.out.println("AND REMAINDER OF: " + (num1 % num2));
		
	}


	public static void main(String[] args) {
		
		int choice, result = 0;
		
		Scanner scan = new Scanner(System.in);
		
		while(true) {
			
			System.out.println("OPTIONS:");
			System.out.println("1 - Add");
			System.out.println("2 - Subtract");
			System.out.println("3 - Multiply");
			System.out.println("4 - Divide");
			System.out.println("5 - Exit");
			
			try {
		
				System.out.println("Please enter your choice.");
				
				choice = scan.nextInt();
				
				switch(choice) {
					case 1:
						result = add(scan);
						System.out.println(result);
						break;
					case 2:
						result = subtract(scan);
						System.out.println(result);
						break;
					case 3:
						result = multiply(scan);
						System.out.println(result);
						break;
					case 4:
						divide(scan);
						break;
					case 5:
						System.out.println("Application closed.");
						scan.close();
						System.exit(0);
					default:
						System.out.println("Invalid choice.");
						break;
				} // end of switch
				
			} catch (Exception e) {
				System.out.println(e.getMessage());
			} // end of try catch
			
		} // end of while

	} // end of main

} // end of class
