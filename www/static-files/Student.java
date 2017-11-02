public class Student {
	
	private String studentName;
	private int studentId;
	
	public Student (String name, int id) {
		setName(name);
		setStudentId(id);
	}

	private void setName(String name) {
		studentName = name;
	}

	private void setStudentId(int id) {
		studentId = id;
	}
	
	public String getName() {
		return studentName;
	}
	
	public int getId() {
		return studentId;
	}
	
	public String toString() {
		return "Student Name: " + this.studentName + " Student ID: " + this.studentId + "\n";
	}

}
