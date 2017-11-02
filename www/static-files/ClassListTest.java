import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.Collection;

import org.junit.Before;
import org.junit.Test;

public class ClassListTest {

	ClassList csClass;

	@Before
	public void setUp() throws Exception {
		Student[] studentRoster = { new Student("John", 9874639), new Student("Jane", 9874284) };
		csClass = new ClassList(studentRoster);
	}

	@Test
	public void testGetClassRosterArray() {
		Student[] studentRoster = csClass.getClassRosterArray();
		assertEquals(studentRoster.length, csClass.getStudentCount());
		for (int i = 0; i < studentRoster.length; i++) {
			assertEquals(studentRoster[i].getName(), csClass.getClassRosterList().get(i).getName());
			assertEquals(studentRoster[i].getId(), csClass.getClassRosterList().get(i).getId());
		}
	}

	@Test
	public void testGetClassRosterList() {
		Student[] studentRosterArray = csClass.getClassRosterArray();
		assertEquals(studentRosterArray.length, csClass.getStudentCount());
		for (int i = 0; i < studentRosterArray.length; i++) {
			assertEquals(studentRosterArray[i].getName(), csClass.getClassRosterList().get(i).getName());
			assertEquals(studentRosterArray[i].getId(), csClass.getClassRosterList().get(i).getId());
		}
	}

	@Test
	public void testGetStudentCount() {
		Student[] studentRosterArray = csClass.getClassRosterArray();
		assertEquals(csClass.getStudentCount(), studentRosterArray.length);
	}

	@Test
	public void testAddStudent() {
		int currentCount = csClass.getStudentCount();
		csClass.addStudent(new Student("Jim", 9874235));
		int updatedCount = csClass.getStudentCount();
		assertEquals(currentCount, updatedCount);
	}

	@Test
	public void testRemoveStudent() {
		int currentCount = csClass.getStudentCount();
		csClass.removeStudent();
		int updatedCount = csClass.getStudentCount();
		assertEquals(currentCount, updatedCount);
	}

	@Test
	public void testGetStudentNames() {
		System.out.println(csClass.getStudentNames());
	}

	@Test
	public void testToString() {
		System.out.println(csClass.toString());
	}
}
