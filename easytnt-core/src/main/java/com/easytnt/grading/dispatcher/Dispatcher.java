/**
 * <p><b></b></p>
 * 
 **/

package com.easytnt.grading.dispatcher;

import java.util.Collection;

import com.easytnt.grading.share.ImgCuttings;

/** 
 * <pre>
 * 
 * </pre>
 *  
 * @author 李贵庆2015年10月10日
 * @version 1.0
 **/
public interface Dispatcher {

	ImgCuttings get();
	
	void put(Collection<ImgCuttings> cuttingses);
	
	void stop();
}

