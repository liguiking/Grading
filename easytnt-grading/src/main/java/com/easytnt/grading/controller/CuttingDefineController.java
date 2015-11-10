/**
 * 
 */
package com.easytnt.grading.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.easytnt.commons.web.view.ModelAndViewFactory;
import com.easytnt.grading.domain.cuttings.CuttingsSolution;

/**
 * <pre>
 * </pre>
 * 
 * @author liuyu
 *
 */
@Controller
@RequestMapping("cuttingDefine")
public class CuttingDefineController {

	@RequestMapping(value = "/{examId}/{paperId}", method = RequestMethod.GET)
	public ModelAndView index(@PathVariable Long examId, @PathVariable Long paperId) throws Exception {
		return ModelAndViewFactory.newModelAndViewFor("/cuttingDefine/home").build();
	}

	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ModelAndView save(@RequestBody CuttingsSolution cuttingsSolution) throws Exception {
		return ModelAndViewFactory.newModelAndViewFor("").build();
	}

	@RequestMapping(value = "/get/{examId}/{paperId}", method = RequestMethod.GET)
	public ModelAndView get(@PathVariable Long examId, @PathVariable Long paperId) throws Exception {
		CuttingsSolution cuttingsSolution = new CuttingsSolution();
		return ModelAndViewFactory.newModelAndViewFor("").with("cuttingsSolution", cuttingsSolution).build();
	}
}
