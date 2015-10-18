/**
 * 
 * 
 **/

package com.easytnt.grading.domain.paper;

import java.util.ArrayList;
import java.util.List;

/** 
 * <pre>
 * 试卷中的大题，如：一、选择题；二、填空题等
 * 在试卷中，不能直接作答的题目，都定义为大题
 * 如语文卷中，
 * 一、选择题；
 * 二、填空题
 * 三、阅读题目
 *   1、古诗词
 *   2、文言文阅读 
 *   3、现代文阅读
 *   3.1 请阅读下方
 *       ......
 *   3.1.1 本文主要内容是什么？
 *   3.1.2 
 *   
 * 其中,一、二、三，1、 2、3，3.1均定义为大题
 * 3.1.1、3.1.2不是大题，是小题{@link Item}}
 * </pre>
 *  
 * @author 李贵庆2015年10月14日
 * @version 1.0
 **/
public class Section {
	
	private ExamPaper paper;

	private Section parentSection;
	
	private List<Section> subSection ;
	
	private String title;
	
	private String caption;
	
	
	private List<Item> items;
	
	public void addItem(Item item) {
		if(this.items == null) {
			this.items = new ArrayList<>();
		}
		
		this.items.add(item);
	}
	
	public int hashCode() {
		//TODO 
		return 0;
	}
	
	public boolean equals() {
		//TODO 
		return false;
	}
	
	public String toString() {
		//TODO  
		return this.getClass().getName();
	}

	public ExamPaper getPaper() {
		return paper;
	}

	public void setPaper(ExamPaper paper) {
		this.paper = paper;
	}

	public Section getParentSection() {
		return parentSection;
	}

	public void setParentSection(Section parentSection) {
		this.parentSection = parentSection;
	}

	public List<Section> getSubSection() {
		return subSection;
	}

	public void setSubSection(List<Section> subSection) {
		this.subSection = subSection;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCaption() {
		return caption;
	}

	public void setCaption(String caption) {
		this.caption = caption;
	}
	
	
}

