"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[104],{18104:function(t,r,e){e.r(r),e.d(r,{NFTCollection:function(){return n}});var a=e(55539),s=e(41017),i=e(9279);e(13550),e(25025),e(70332),e(8455),e(59189),e(26729),e(54098),e(62555),e(26219),e(61303),e(49242),e(70565),e(13670),e(79120),e(97604),e(8187),e(19362),e(71497),e(54730),e(36250),e(85725),e(38730),e(2090),e(237),e(65609),e(86841),e(49561),e(54253),e(40553),e(26),e(69392),e(62822),e(82037),e(2162),e(64063),e(34161),e(50266),e(98839),e(51375),e(43320),e(65815),e(40721),e(24601),e(46878),e(20583),e(92355),e(84194),e(51121),e(32484),e(78435);class n extends s.aG{constructor(t,r,e){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.co(t,r,c,i),e,o),(0,a._)(this,"abi",void 0),(0,a._)(this,"metadata",void 0),(0,a._)(this,"roles",void 0),(0,a._)(this,"encoder",void 0),(0,a._)(this,"estimator",void 0),(0,a._)(this,"events",void 0),(0,a._)(this,"sales",void 0),(0,a._)(this,"platformFees",void 0),(0,a._)(this,"royalties",void 0),(0,a._)(this,"owner",void 0),(0,a._)(this,"signature",void 0),(0,a._)(this,"interceptor",void 0),(0,a._)(this,"erc721",void 0),this.abi=c,this.metadata=new s.ai(this.contractWrapper,s.cA,this.storage),this.roles=new s.aj(this.contractWrapper,n.contractRoles),this.royalties=new s.ak(this.contractWrapper,this.metadata),this.sales=new s.al(this.contractWrapper),this.encoder=new s.ah(this.contractWrapper),this.estimator=new s.aS(this.contractWrapper),this.events=new s.aT(this.contractWrapper),this.platformFees=new s.aV(this.contractWrapper),this.interceptor=new s.aU(this.contractWrapper),this.erc721=new s.ax(this.contractWrapper,this.storage,o),this.signature=new s.aA(this.contractWrapper,this.storage),this.owner=new s.aX(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async isTransferRestricted(){return!(await this.contractWrapper.readContract.hasRole((0,s.bs)("transfer"),i.d))}async mint(t){return this.erc721.mint(t)}async mintTo(t,r){return this.erc721.mintTo(t,r)}async mintBatch(t){return this.erc721.mintBatch(t)}async mintBatchTo(t,r){return this.erc721.mintBatchTo(t,r)}async burn(t){return this.erc721.burn(t)}async call(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),a=1;a<r;a++)e[a-1]=arguments[a];return this.contractWrapper.call(t,...e)}}(0,a._)(n,"contractRoles",["admin","minter","transfer"])}}]);