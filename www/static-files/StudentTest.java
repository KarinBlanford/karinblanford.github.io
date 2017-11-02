import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class StudentTest {
	
	Student student1;
	Student student2;

	@Before
	public void setUp() throws Exception {
		student1 = new Student("John", 9874639);
		student2 = new Student("Jane", 9874284);
	}

	@Test
	public void testGetName() {
		assertEquals(student1.getName(), "John");
		assertEquals(student2.getName(), "Jane");
	}
	
	@Test
	public void testGetId() {
		assertEquals(student1.getId(), 9874639);
		assertEquals(student2.getId(), 9874284);
	}
	
	@Test
	public void testToString() {
		assertEquals(student1.toString(), "Student Name: John Student ID: 9874639\n");
		assertEquals(student2.toString(), "Student Name: Jane Student ID: 9874284\n");
	}

}
