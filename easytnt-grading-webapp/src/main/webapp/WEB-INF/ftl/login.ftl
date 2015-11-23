<#import "/taglib/html.ftl" as doc> 
<@doc.html entryjs="login" title="用户登录">
  <div class="workspace ">
      <div class="container">
        <div class="row"　style="margin-top:100px;">         
			<div class="col-md-4"></div>
			<div class="col-md-4">
				<div class="panel panel-default">
			        <div class="panel-heading">用户登录</div>
			        <div class="panel-body">
			            <div class="">
							<form class="form-horizontal" action="${request.contextPath}/login" method="POST">
							  <div class="form-group">
							    <label for="account" class="col-sm-4 control-label">账号</label>
							    <div class="col-sm-6">
							      <input type="text" class="form-control" id="username" name="username" placeholder="账号">
							    </div>
							  </div>
							  <div class="form-group">
							    <label for="password" class="col-sm-4 control-label">密码</label>
							    <div class="col-sm-6">
							      <input type="password" class="form-control" id="password" name="password" placeholder="密码">
							    </div>
							  </div>
							  <div class="form-group">
							    <div class="col-sm-offset-8 col-sm-4">
							      <button type="submit" class="btn btn-default">登录</button>
							    </div>
							  </div>
							</form>		            
			            </div>
			        </div>
			    </div>			
			</div>
			<div class="col-md-4"></div>

        </div>
      </div>
  </div>  
</@doc.html>
