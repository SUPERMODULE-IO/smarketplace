"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[604],{70604:function(t,e,a){a.r(e),a.d(e,{TokenDrop:function(){return s}});var r=a(55539),n=a(41017),i=a(9279);a(13550),a(25025),a(70332),a(8455),a(59189),a(26729),a(54098),a(62555),a(26219),a(61303),a(49242),a(70565),a(13670),a(79120),a(97604),a(8187),a(19362),a(71497),a(54730),a(36250),a(85725),a(38730),a(2090),a(237),a(65609),a(86841),a(49561),a(54253),a(40553),a(26),a(69392),a(62822),a(82037),a(2162),a(64063),a(34161),a(50266),a(98839),a(51375),a(43320),a(65815),a(40721),a(24601),a(46878),a(20583),a(92355),a(84194),a(51121),a(32484),a(78435);class s extends n.aw{constructor(t,e,a){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.co(t,e,c,i),a,o),(0,r._)(this,"abi",void 0),(0,r._)(this,"metadata",void 0),(0,r._)(this,"roles",void 0),(0,r._)(this,"encoder",void 0),(0,r._)(this,"estimator",void 0),(0,r._)(this,"sales",void 0),(0,r._)(this,"platformFees",void 0),(0,r._)(this,"events",void 0),(0,r._)(this,"claimConditions",void 0),(0,r._)(this,"interceptor",void 0),this.abi=c,this.metadata=new n.ai(this.contractWrapper,n.cJ,this.storage),this.roles=new n.aj(this.contractWrapper,s.contractRoles),this.encoder=new n.ah(this.contractWrapper),this.estimator=new n.aS(this.contractWrapper),this.events=new n.aT(this.contractWrapper),this.sales=new n.al(this.contractWrapper),this.platformFees=new n.aV(this.contractWrapper),this.interceptor=new n.aU(this.contractWrapper),this.claimConditions=new n.an(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(t))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.readContract.delegates(t)}async isTransferRestricted(){return!(await this.contractWrapper.readContract.hasRole((0,n.bs)("transfer"),i.d))}async claim(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.claimTo(await this.contractWrapper.getSignerAddress(),t,e)}async claimTo(t,e){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.erc20.claimTo(t,e,{checkERC20Allowance:a})}async delegateTo(t){return{receipt:await this.contractWrapper.sendTransaction("delegate",[t])}}async burnTokens(t){return this.erc20.burn(t)}async burnFrom(t,e){return this.erc20.burnFrom(t,e)}async call(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),r=1;r<e;r++)a[r-1]=arguments[r];return this.contractWrapper.call(t,...a)}}(0,r._)(s,"contractRoles",["admin","transfer"])}}]);