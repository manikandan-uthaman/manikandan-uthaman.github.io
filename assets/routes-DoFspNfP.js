import{n as e,r as t,t as n}from"./index-Ddz5YDvm.js";var r=t(e()),i=n();function a(){let[e,t]=(0,r.useState)(`dark`),[n,a]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=(typeof localStorage<`u`&&localStorage.getItem(`theme`))??`dark`;t(e),document.documentElement.classList.toggle(`dark`,e===`dark`),a(!0)},[]),(0,i.jsx)(`button`,{onClick:()=>{let n=e===`dark`?`light`:`dark`;t(n),document.documentElement.classList.toggle(`dark`,n===`dark`);try{localStorage.setItem(`theme`,n)}catch{}},"aria-label":`Toggle theme`,className:`inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-surface/60 backdrop-blur hover:border-accent hover:text-accent transition-colors`,children:n&&e===`dark`?(0,i.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,i.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`}),(0,i.jsx)(`path`,{d:`M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41`})]}):(0,i.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,i.jsx)(`path`,{d:`M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`})})})}var o;(function(e){e.assertEqual=e=>{};function t(e){}e.assertIs=t;function n(e){throw Error()}e.assertNever=n,e.arrayToEnum=e=>{let t={};for(let n of e)t[n]=n;return t},e.getValidEnumValues=t=>{let n=e.objectKeys(t).filter(e=>typeof t[t[e]]!=`number`),r={};for(let e of n)r[e]=t[e];return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys=typeof Object.keys==`function`?e=>Object.keys(e):e=>{let t=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.find=(e,t)=>{for(let n of e)if(t(n))return n},e.isInteger=typeof Number.isInteger==`function`?e=>Number.isInteger(e):e=>typeof e==`number`&&Number.isFinite(e)&&Math.floor(e)===e;function r(e,t=` | `){return e.map(e=>typeof e==`string`?`'${e}'`:e).join(t)}e.joinValues=r,e.jsonStringifyReplacer=(e,t)=>typeof t==`bigint`?t.toString():t})(o||={});var s;(function(e){e.mergeShapes=(e,t)=>({...e,...t})})(s||={});var c=o.arrayToEnum([`string`,`nan`,`number`,`integer`,`float`,`boolean`,`date`,`bigint`,`symbol`,`function`,`undefined`,`null`,`array`,`object`,`unknown`,`promise`,`void`,`never`,`map`,`set`]),l=e=>{switch(typeof e){case`undefined`:return c.undefined;case`string`:return c.string;case`number`:return Number.isNaN(e)?c.nan:c.number;case`boolean`:return c.boolean;case`function`:return c.function;case`bigint`:return c.bigint;case`symbol`:return c.symbol;case`object`:return Array.isArray(e)?c.array:e===null?c.null:e.then&&typeof e.then==`function`&&e.catch&&typeof e.catch==`function`?c.promise:typeof Map<`u`&&e instanceof Map?c.map:typeof Set<`u`&&e instanceof Set?c.set:typeof Date<`u`&&e instanceof Date?c.date:c.object;default:return c.unknown}},u=o.arrayToEnum([`invalid_type`,`invalid_literal`,`custom`,`invalid_union`,`invalid_union_discriminator`,`invalid_enum_value`,`unrecognized_keys`,`invalid_arguments`,`invalid_return_type`,`invalid_date`,`invalid_string`,`too_small`,`too_big`,`invalid_intersection_types`,`not_multiple_of`,`not_finite`]),d=class e extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name=`ZodError`,this.issues=e}format(e){let t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(let i of e.issues)if(i.code===`invalid_union`)i.unionErrors.map(r);else if(i.code===`invalid_return_type`)r(i.returnTypeError);else if(i.code===`invalid_arguments`)r(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){let n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}static assert(t){if(!(t instanceof e))throw Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,o.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=e=>e.message){let t={},n=[];for(let r of this.issues)if(r.path.length>0){let n=r.path[0];t[n]=t[n]||[],t[n].push(e(r))}else n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}};d.create=e=>new d(e);var f=(e,t)=>{let n;switch(e.code){case u.invalid_type:n=e.received===c.undefined?`Required`:`Expected ${e.expected}, received ${e.received}`;break;case u.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,o.jsonStringifyReplacer)}`;break;case u.unrecognized_keys:n=`Unrecognized key(s) in object: ${o.joinValues(e.keys,`, `)}`;break;case u.invalid_union:n=`Invalid input`;break;case u.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${o.joinValues(e.options)}`;break;case u.invalid_enum_value:n=`Invalid enum value. Expected ${o.joinValues(e.options)}, received '${e.received}'`;break;case u.invalid_arguments:n=`Invalid function arguments`;break;case u.invalid_return_type:n=`Invalid function return type`;break;case u.invalid_date:n=`Invalid date`;break;case u.invalid_string:typeof e.validation==`object`?`includes`in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position==`number`&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):`startsWith`in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:`endsWith`in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:o.assertNever(e.validation):n=e.validation===`regex`?`Invalid`:`Invalid ${e.validation}`;break;case u.too_small:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at least`:`more than`} ${e.minimum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at least`:`over`} ${e.minimum} character(s)`:e.type===`number`||e.type===`bigint`?`Number must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${e.minimum}`:e.type===`date`?`Date must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${new Date(Number(e.minimum))}`:`Invalid input`;break;case u.too_big:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at most`:`less than`} ${e.maximum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at most`:`under`} ${e.maximum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`bigint`?`BigInt must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`date`?`Date must be ${e.exact?`exactly`:e.inclusive?`smaller than or equal to`:`smaller than`} ${new Date(Number(e.maximum))}`:`Invalid input`;break;case u.custom:n=`Invalid input`;break;case u.invalid_intersection_types:n=`Intersection results could not be merged`;break;case u.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case u.not_finite:n=`Number must be finite`;break;default:n=t.defaultError,o.assertNever(e)}return{message:n}},p=f;function m(){return p}var h=e=>{let{data:t,path:n,errorMaps:r,issueData:i}=e,a=[...n,...i.path||[]],o={...i,path:a};if(i.message!==void 0)return{...i,path:a,message:i.message};let s=``,c=r.filter(e=>!!e).slice().reverse();for(let e of c)s=e(o,{data:t,defaultError:s}).message;return{...i,path:a,message:s}};function g(e,t){let n=m(),r=h({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===f?void 0:f].filter(e=>!!e)});e.common.issues.push(r)}var _=class e{constructor(){this.value=`valid`}dirty(){this.value===`valid`&&(this.value=`dirty`)}abort(){this.value!==`aborted`&&(this.value=`aborted`)}static mergeArray(e,t){let n=[];for(let r of t){if(r.status===`aborted`)return v;r.status===`dirty`&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(t,n){let r=[];for(let e of n){let t=await e.key,n=await e.value;r.push({key:t,value:n})}return e.mergeObjectSync(t,r)}static mergeObjectSync(e,t){let n={};for(let r of t){let{key:t,value:i}=r;if(t.status===`aborted`||i.status===`aborted`)return v;t.status===`dirty`&&e.dirty(),i.status===`dirty`&&e.dirty(),t.value!==`__proto__`&&(i.value!==void 0||r.alwaysSet)&&(n[t.value]=i.value)}return{status:e.value,value:n}}},v=Object.freeze({status:`aborted`}),y=e=>({status:`dirty`,value:e}),b=e=>({status:`valid`,value:e}),ee=e=>e.status===`aborted`,te=e=>e.status===`dirty`,x=e=>e.status===`valid`,ne=e=>typeof Promise<`u`&&e instanceof Promise,S;(function(e){e.errToObj=e=>typeof e==`string`?{message:e}:e||{},e.toString=e=>typeof e==`string`?e:e?.message})(S||={});var C=class{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},re=(e,t)=>{if(x(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error(`Validation failed but no issues detected.`);return{success:!1,get error(){if(this._error)return this._error;let t=new d(e.common.issues);return this._error=t,this._error}}};function w(e){if(!e)return{};let{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(t,i)=>{let{message:a}=e;return t.code===`invalid_enum_value`?{message:a??i.defaultError}:i.data===void 0?{message:a??r??i.defaultError}:t.code===`invalid_type`?{message:a??n??i.defaultError}:{message:i.defaultError}},description:i}}var T=class{get description(){return this._def.description}_getType(e){return l(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:l(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new _,ctx:{common:e.parent.common,data:e.data,parsedType:l(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(ne(t))throw Error(`Synchronous parse encountered promise.`);return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){let n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:l(e)};return re(n,this._parseSync({data:e,path:n.path,parent:n}))}"~validate"(e){let t={common:{issues:[],async:!!this[`~standard`].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:l(e)};if(!this[`~standard`].async)try{let n=this._parseSync({data:e,path:[],parent:t});return x(n)?{value:n.value}:{issues:t.common.issues}}catch(e){e?.message?.toLowerCase()?.includes(`encountered`)&&(this[`~standard`].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(e=>x(e)?{value:e.value}:{issues:t.common.issues})}async parseAsync(e,t){let n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){let n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:l(e)},r=this._parse({data:e,path:n.path,parent:n});return re(n,await(ne(r)?r:Promise.resolve(r)))}refine(e,t){let n=e=>typeof t==`string`||t===void 0?{message:t}:typeof t==`function`?t(e):t;return this._refinement((t,r)=>{let i=e(t),a=()=>r.addIssue({code:u.custom,...n(t)});return typeof Promise<`u`&&i instanceof Promise?i.then(e=>e?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t==`function`?t(n,r):t),!1))}_refinement(e){return new j({schema:this,typeName:P.ZodEffects,effect:{type:`refinement`,refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this[`~standard`]={version:1,vendor:`zod`,validate:e=>this[`~validate`](e)}}optional(){return M.create(this,this._def)}nullable(){return N.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ze.create(this)}promise(){return et.create(this,this._def)}or(e){return Ve.create([this,e],this._def)}and(e){return We.create(this,e,this._def)}transform(e){return new j({...w(this._def),schema:this,typeName:P.ZodEffects,effect:{type:`transform`,transform:e}})}default(e){let t=typeof e==`function`?e:()=>e;return new tt({...w(this._def),innerType:this,defaultValue:t,typeName:P.ZodDefault})}brand(){return new it({typeName:P.ZodBranded,type:this,...w(this._def)})}catch(e){let t=typeof e==`function`?e:()=>e;return new nt({...w(this._def),innerType:this,catchValue:t,typeName:P.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return at.create(this,e)}readonly(){return ot.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},E=/^c[^\s-]{8,}$/i,ie=/^[0-9a-z]+$/,ae=/^[0-9A-HJKMNP-TV-Z]{26}$/i,oe=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,se=/^[a-z0-9_-]{21}$/i,ce=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,le=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,ue=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,de=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,fe,pe=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,me=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,he=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,ge=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,_e=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,ve=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,ye=`((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,be=RegExp(`^${ye}$`);function xe(e){let t=`[0-5]\\d`;e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision??(t=`${t}(\\.\\d+)?`);let n=e.precision?`+`:`?`;return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`}function Se(e){return RegExp(`^${xe(e)}$`)}function Ce(e){let t=`${ye}T${xe(e)}`,n=[];return n.push(e.local?`Z?`:`Z`),e.offset&&n.push(`([+-]\\d{2}:?\\d{2})`),t=`${t}(${n.join(`|`)})`,RegExp(`^${t}$`)}function we(e,t){return!!((t===`v4`||!t)&&pe.test(e)||(t===`v6`||!t)&&he.test(e))}function Te(e,t){if(!ce.test(e))return!1;try{let[n]=e.split(`.`);if(!n)return!1;let r=n.replace(/-/g,`+`).replace(/_/g,`/`).padEnd(n.length+(4-n.length%4)%4,`=`),i=JSON.parse(atob(r));return!(typeof i!=`object`||!i||`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&i.alg!==t)}catch{return!1}}function Ee(e,t){return!!((t===`v4`||!t)&&me.test(e)||(t===`v6`||!t)&&ge.test(e))}var De=class e extends T{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==c.string){let t=this._getOrReturnCtx(e);return g(t,{code:u.invalid_type,expected:c.string,received:t.parsedType}),v}let t=new _,n;for(let r of this._def.checks)if(r.kind===`min`)e.data.length<r.value&&(n=this._getOrReturnCtx(e,n),g(n,{code:u.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`max`)e.data.length>r.value&&(n=this._getOrReturnCtx(e,n),g(n,{code:u.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`length`){let i=e.data.length>r.value,a=e.data.length<r.value;(i||a)&&(n=this._getOrReturnCtx(e,n),i?g(n,{code:u.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}):a&&g(n,{code:u.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}),t.dirty())}else if(r.kind===`email`)ue.test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`email`,code:u.invalid_string,message:r.message}),t.dirty());else if(r.kind===`emoji`)fe||=new RegExp(de,`u`),fe.test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`emoji`,code:u.invalid_string,message:r.message}),t.dirty());else if(r.kind===`uuid`)oe.test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`uuid`,code:u.invalid_string,message:r.message}),t.dirty());else if(r.kind===`nanoid`)se.test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`nanoid`,code:u.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid`)E.test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`cuid`,code:u.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid2`)ie.test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`cuid2`,code:u.invalid_string,message:r.message}),t.dirty());else if(r.kind===`ulid`)ae.test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`ulid`,code:u.invalid_string,message:r.message}),t.dirty());else if(r.kind===`url`)try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),g(n,{validation:`url`,code:u.invalid_string,message:r.message}),t.dirty()}else r.kind===`regex`?(r.regex.lastIndex=0,r.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`regex`,code:u.invalid_string,message:r.message}),t.dirty())):r.kind===`trim`?e.data=e.data.trim():r.kind===`includes`?e.data.includes(r.value,r.position)||(n=this._getOrReturnCtx(e,n),g(n,{code:u.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),t.dirty()):r.kind===`toLowerCase`?e.data=e.data.toLowerCase():r.kind===`toUpperCase`?e.data=e.data.toUpperCase():r.kind===`startsWith`?e.data.startsWith(r.value)||(n=this._getOrReturnCtx(e,n),g(n,{code:u.invalid_string,validation:{startsWith:r.value},message:r.message}),t.dirty()):r.kind===`endsWith`?e.data.endsWith(r.value)||(n=this._getOrReturnCtx(e,n),g(n,{code:u.invalid_string,validation:{endsWith:r.value},message:r.message}),t.dirty()):r.kind===`datetime`?Ce(r).test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{code:u.invalid_string,validation:`datetime`,message:r.message}),t.dirty()):r.kind===`date`?be.test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{code:u.invalid_string,validation:`date`,message:r.message}),t.dirty()):r.kind===`time`?Se(r).test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{code:u.invalid_string,validation:`time`,message:r.message}),t.dirty()):r.kind===`duration`?le.test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`duration`,code:u.invalid_string,message:r.message}),t.dirty()):r.kind===`ip`?we(e.data,r.version)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`ip`,code:u.invalid_string,message:r.message}),t.dirty()):r.kind===`jwt`?Te(e.data,r.alg)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`jwt`,code:u.invalid_string,message:r.message}),t.dirty()):r.kind===`cidr`?Ee(e.data,r.version)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`cidr`,code:u.invalid_string,message:r.message}),t.dirty()):r.kind===`base64`?_e.test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`base64`,code:u.invalid_string,message:r.message}),t.dirty()):r.kind===`base64url`?ve.test(e.data)||(n=this._getOrReturnCtx(e,n),g(n,{validation:`base64url`,code:u.invalid_string,message:r.message}),t.dirty()):o.assertNever(r);return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement(t=>e.test(t),{validation:t,code:u.invalid_string,...S.errToObj(n)})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}email(e){return this._addCheck({kind:`email`,...S.errToObj(e)})}url(e){return this._addCheck({kind:`url`,...S.errToObj(e)})}emoji(e){return this._addCheck({kind:`emoji`,...S.errToObj(e)})}uuid(e){return this._addCheck({kind:`uuid`,...S.errToObj(e)})}nanoid(e){return this._addCheck({kind:`nanoid`,...S.errToObj(e)})}cuid(e){return this._addCheck({kind:`cuid`,...S.errToObj(e)})}cuid2(e){return this._addCheck({kind:`cuid2`,...S.errToObj(e)})}ulid(e){return this._addCheck({kind:`ulid`,...S.errToObj(e)})}base64(e){return this._addCheck({kind:`base64`,...S.errToObj(e)})}base64url(e){return this._addCheck({kind:`base64url`,...S.errToObj(e)})}jwt(e){return this._addCheck({kind:`jwt`,...S.errToObj(e)})}ip(e){return this._addCheck({kind:`ip`,...S.errToObj(e)})}cidr(e){return this._addCheck({kind:`cidr`,...S.errToObj(e)})}datetime(e){return typeof e==`string`?this._addCheck({kind:`datetime`,precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:`datetime`,precision:e?.precision===void 0?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...S.errToObj(e?.message)})}date(e){return this._addCheck({kind:`date`,message:e})}time(e){return typeof e==`string`?this._addCheck({kind:`time`,precision:null,message:e}):this._addCheck({kind:`time`,precision:e?.precision===void 0?null:e?.precision,...S.errToObj(e?.message)})}duration(e){return this._addCheck({kind:`duration`,...S.errToObj(e)})}regex(e,t){return this._addCheck({kind:`regex`,regex:e,...S.errToObj(t)})}includes(e,t){return this._addCheck({kind:`includes`,value:e,position:t?.position,...S.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:`startsWith`,value:e,...S.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:`endsWith`,value:e,...S.errToObj(t)})}min(e,t){return this._addCheck({kind:`min`,value:e,...S.errToObj(t)})}max(e,t){return this._addCheck({kind:`max`,value:e,...S.errToObj(t)})}length(e,t){return this._addCheck({kind:`length`,value:e,...S.errToObj(t)})}nonempty(e){return this.min(1,S.errToObj(e))}trim(){return new e({...this._def,checks:[...this._def.checks,{kind:`trim`}]})}toLowerCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toLowerCase`}]})}toUpperCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toUpperCase`}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind===`datetime`)}get isDate(){return!!this._def.checks.find(e=>e.kind===`date`)}get isTime(){return!!this._def.checks.find(e=>e.kind===`time`)}get isDuration(){return!!this._def.checks.find(e=>e.kind===`duration`)}get isEmail(){return!!this._def.checks.find(e=>e.kind===`email`)}get isURL(){return!!this._def.checks.find(e=>e.kind===`url`)}get isEmoji(){return!!this._def.checks.find(e=>e.kind===`emoji`)}get isUUID(){return!!this._def.checks.find(e=>e.kind===`uuid`)}get isNANOID(){return!!this._def.checks.find(e=>e.kind===`nanoid`)}get isCUID(){return!!this._def.checks.find(e=>e.kind===`cuid`)}get isCUID2(){return!!this._def.checks.find(e=>e.kind===`cuid2`)}get isULID(){return!!this._def.checks.find(e=>e.kind===`ulid`)}get isIP(){return!!this._def.checks.find(e=>e.kind===`ip`)}get isCIDR(){return!!this._def.checks.find(e=>e.kind===`cidr`)}get isBase64(){return!!this._def.checks.find(e=>e.kind===`base64`)}get isBase64url(){return!!this._def.checks.find(e=>e.kind===`base64url`)}get minLength(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};De.create=e=>new De({checks:[],typeName:P.ZodString,coerce:e?.coerce??!1,...w(e)});function Oe(e,t){let n=(e.toString().split(`.`)[1]||``).length,r=(t.toString().split(`.`)[1]||``).length,i=n>r?n:r;return Number.parseInt(e.toFixed(i).replace(`.`,``))%Number.parseInt(t.toFixed(i).replace(`.`,``))/10**i}var ke=class e extends T{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==c.number){let t=this._getOrReturnCtx(e);return g(t,{code:u.invalid_type,expected:c.number,received:t.parsedType}),v}let t,n=new _;for(let r of this._def.checks)r.kind===`int`?o.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),g(t,{code:u.invalid_type,expected:`integer`,received:`float`,message:r.message}),n.dirty()):r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),g(t,{code:u.too_small,minimum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),g(t,{code:u.too_big,maximum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`multipleOf`?Oe(e.data,r.value)!==0&&(t=this._getOrReturnCtx(e,t),g(t,{code:u.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):r.kind===`finite`?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),g(t,{code:u.not_finite,message:r.message}),n.dirty()):o.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit(`min`,e,!0,S.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,S.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,S.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,S.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:S.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}int(e){return this._addCheck({kind:`int`,message:S.toString(e)})}positive(e){return this._addCheck({kind:`min`,value:0,inclusive:!1,message:S.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:0,inclusive:!1,message:S.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:0,inclusive:!0,message:S.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:0,inclusive:!0,message:S.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:S.toString(t)})}finite(e){return this._addCheck({kind:`finite`,message:S.toString(e)})}safe(e){return this._addCheck({kind:`min`,inclusive:!0,value:-(2**53-1),message:S.toString(e)})._addCheck({kind:`max`,inclusive:!0,value:2**53-1,message:S.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind===`int`||e.kind===`multipleOf`&&o.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let n of this._def.checks)if(n.kind===`finite`||n.kind===`int`||n.kind===`multipleOf`)return!0;else n.kind===`min`?(t===null||n.value>t)&&(t=n.value):n.kind===`max`&&(e===null||n.value<e)&&(e=n.value);return Number.isFinite(t)&&Number.isFinite(e)}};ke.create=e=>new ke({checks:[],typeName:P.ZodNumber,coerce:e?.coerce||!1,...w(e)});var Ae=class e extends T{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==c.bigint)return this._getInvalidInput(e);let t,n=new _;for(let r of this._def.checks)r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),g(t,{code:u.too_small,type:`bigint`,minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),g(t,{code:u.too_big,type:`bigint`,maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`multipleOf`?e.data%r.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),g(t,{code:u.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):o.assertNever(r);return{status:n.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return g(t,{code:u.invalid_type,expected:c.bigint,received:t.parsedType}),v}gte(e,t){return this.setLimit(`min`,e,!0,S.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,S.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,S.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,S.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:S.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}positive(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!1,message:S.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!1,message:S.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!0,message:S.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!0,message:S.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:S.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};Ae.create=e=>new Ae({checks:[],typeName:P.ZodBigInt,coerce:e?.coerce??!1,...w(e)});var je=class extends T{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==c.boolean){let t=this._getOrReturnCtx(e);return g(t,{code:u.invalid_type,expected:c.boolean,received:t.parsedType}),v}return b(e.data)}};je.create=e=>new je({typeName:P.ZodBoolean,coerce:e?.coerce||!1,...w(e)});var Me=class e extends T{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==c.date){let t=this._getOrReturnCtx(e);return g(t,{code:u.invalid_type,expected:c.date,received:t.parsedType}),v}if(Number.isNaN(e.data.getTime()))return g(this._getOrReturnCtx(e),{code:u.invalid_date}),v;let t=new _,n;for(let r of this._def.checks)r.kind===`min`?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),g(n,{code:u.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:`date`}),t.dirty()):r.kind===`max`?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),g(n,{code:u.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:`date`}),t.dirty()):o.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}min(e,t){return this._addCheck({kind:`min`,value:e.getTime(),message:S.toString(t)})}max(e,t){return this._addCheck({kind:`max`,value:e.getTime(),message:S.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e==null?null:new Date(e)}get maxDate(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e==null?null:new Date(e)}};Me.create=e=>new Me({checks:[],coerce:e?.coerce||!1,typeName:P.ZodDate,...w(e)});var Ne=class extends T{_parse(e){if(this._getType(e)!==c.symbol){let t=this._getOrReturnCtx(e);return g(t,{code:u.invalid_type,expected:c.symbol,received:t.parsedType}),v}return b(e.data)}};Ne.create=e=>new Ne({typeName:P.ZodSymbol,...w(e)});var Pe=class extends T{_parse(e){if(this._getType(e)!==c.undefined){let t=this._getOrReturnCtx(e);return g(t,{code:u.invalid_type,expected:c.undefined,received:t.parsedType}),v}return b(e.data)}};Pe.create=e=>new Pe({typeName:P.ZodUndefined,...w(e)});var Fe=class extends T{_parse(e){if(this._getType(e)!==c.null){let t=this._getOrReturnCtx(e);return g(t,{code:u.invalid_type,expected:c.null,received:t.parsedType}),v}return b(e.data)}};Fe.create=e=>new Fe({typeName:P.ZodNull,...w(e)});var Ie=class extends T{constructor(){super(...arguments),this._any=!0}_parse(e){return b(e.data)}};Ie.create=e=>new Ie({typeName:P.ZodAny,...w(e)});var Le=class extends T{constructor(){super(...arguments),this._unknown=!0}_parse(e){return b(e.data)}};Le.create=e=>new Le({typeName:P.ZodUnknown,...w(e)});var D=class extends T{_parse(e){let t=this._getOrReturnCtx(e);return g(t,{code:u.invalid_type,expected:c.never,received:t.parsedType}),v}};D.create=e=>new D({typeName:P.ZodNever,...w(e)});var Re=class extends T{_parse(e){if(this._getType(e)!==c.undefined){let t=this._getOrReturnCtx(e);return g(t,{code:u.invalid_type,expected:c.void,received:t.parsedType}),v}return b(e.data)}};Re.create=e=>new Re({typeName:P.ZodVoid,...w(e)});var ze=class e extends T{_parse(e){let{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==c.array)return g(t,{code:u.invalid_type,expected:c.array,received:t.parsedType}),v;if(r.exactLength!==null){let e=t.data.length>r.exactLength.value,i=t.data.length<r.exactLength.value;(e||i)&&(g(t,{code:e?u.too_big:u.too_small,minimum:i?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:`array`,inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(g(t,{code:u.too_small,minimum:r.minLength.value,type:`array`,inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(g(t,{code:u.too_big,maximum:r.maxLength.value,type:`array`,inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((e,n)=>r.type._parseAsync(new C(t,e,t.path,n)))).then(e=>_.mergeArray(n,e));let i=[...t.data].map((e,n)=>r.type._parseSync(new C(t,e,t.path,n)));return _.mergeArray(n,i)}get element(){return this._def.type}min(t,n){return new e({...this._def,minLength:{value:t,message:S.toString(n)}})}max(t,n){return new e({...this._def,maxLength:{value:t,message:S.toString(n)}})}length(t,n){return new e({...this._def,exactLength:{value:t,message:S.toString(n)}})}nonempty(e){return this.min(1,e)}};ze.create=(e,t)=>new ze({type:e,minLength:null,maxLength:null,exactLength:null,typeName:P.ZodArray,...w(t)});function Be(e){if(e instanceof O){let t={};for(let n in e.shape){let r=e.shape[n];t[n]=M.create(Be(r))}return new O({...e._def,shape:()=>t})}else if(e instanceof ze)return new ze({...e._def,type:Be(e.element)});else if(e instanceof M)return M.create(Be(e.unwrap()));else if(e instanceof N)return N.create(Be(e.unwrap()));else if(e instanceof A)return A.create(e.items.map(e=>Be(e)));else return e}var O=class e extends T{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),t=o.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==c.object){let t=this._getOrReturnCtx(e);return g(t,{code:u.invalid_type,expected:c.object,received:t.parsedType}),v}let{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof D&&this._def.unknownKeys===`strip`))for(let e in n.data)i.includes(e)||a.push(e);let o=[];for(let e of i){let t=r[e],i=n.data[e];o.push({key:{status:`valid`,value:e},value:t._parse(new C(n,i,n.path,e)),alwaysSet:e in n.data})}if(this._def.catchall instanceof D){let e=this._def.unknownKeys;if(e===`passthrough`)for(let e of a)o.push({key:{status:`valid`,value:e},value:{status:`valid`,value:n.data[e]}});else if(e===`strict`)a.length>0&&(g(n,{code:u.unrecognized_keys,keys:a}),t.dirty());else if(e!==`strip`)throw Error(`Internal ZodObject error: invalid unknownKeys value.`)}else{let e=this._def.catchall;for(let t of a){let r=n.data[t];o.push({key:{status:`valid`,value:t},value:e._parse(new C(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let n=await t.key,r=await t.value;e.push({key:n,value:r,alwaysSet:t.alwaysSet})}return e}).then(e=>_.mergeObjectSync(t,e)):_.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(t){return S.errToObj,new e({...this._def,unknownKeys:`strict`,...t===void 0?{}:{errorMap:(e,n)=>{let r=this._def.errorMap?.(e,n).message??n.defaultError;return e.code===`unrecognized_keys`?{message:S.errToObj(t).message??r}:{message:r}}}})}strip(){return new e({...this._def,unknownKeys:`strip`})}passthrough(){return new e({...this._def,unknownKeys:`passthrough`})}extend(t){return new e({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new e({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:P.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(t){return new e({...this._def,catchall:t})}pick(t){let n={};for(let e of o.objectKeys(t))t[e]&&this.shape[e]&&(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}omit(t){let n={};for(let e of o.objectKeys(this.shape))t[e]||(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}deepPartial(){return Be(this)}partial(t){let n={};for(let e of o.objectKeys(this.shape)){let r=this.shape[e];t&&!t[e]?n[e]=r:n[e]=r.optional()}return new e({...this._def,shape:()=>n})}required(t){let n={};for(let e of o.objectKeys(this.shape))if(t&&!t[e])n[e]=this.shape[e];else{let t=this.shape[e];for(;t instanceof M;)t=t._def.innerType;n[e]=t}return new e({...this._def,shape:()=>n})}keyof(){return Ze(o.objectKeys(this.shape))}};O.create=(e,t)=>new O({shape:()=>e,unknownKeys:`strip`,catchall:D.create(),typeName:P.ZodObject,...w(t)}),O.strictCreate=(e,t)=>new O({shape:()=>e,unknownKeys:`strict`,catchall:D.create(),typeName:P.ZodObject,...w(t)}),O.lazycreate=(e,t)=>new O({shape:e,unknownKeys:`strip`,catchall:D.create(),typeName:P.ZodObject,...w(t)});var Ve=class extends T{_parse(e){let{ctx:t}=this._processInputParams(e),n=this._def.options;function r(e){for(let t of e)if(t.result.status===`valid`)return t.result;for(let n of e)if(n.result.status===`dirty`)return t.common.issues.push(...n.ctx.common.issues),n.result;let n=e.map(e=>new d(e.ctx.common.issues));return g(t,{code:u.invalid_union,unionErrors:n}),v}if(t.common.async)return Promise.all(n.map(async e=>{let n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(r);{let e,r=[];for(let i of n){let n={...t,common:{...t.common,issues:[]},parent:null},a=i._parseSync({data:t.data,path:t.path,parent:n});if(a.status===`valid`)return a;a.status===`dirty`&&!e&&(e={result:a,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=r.map(e=>new d(e));return g(t,{code:u.invalid_union,unionErrors:i}),v}}get options(){return this._def.options}};Ve.create=(e,t)=>new Ve({options:e,typeName:P.ZodUnion,...w(t)});var k=e=>e instanceof Ye?k(e.schema):e instanceof j?k(e.innerType()):e instanceof Xe?[e.value]:e instanceof Qe?e.options:e instanceof $e?o.objectValues(e.enum):e instanceof tt?k(e._def.innerType):e instanceof Pe?[void 0]:e instanceof Fe?[null]:e instanceof M?[void 0,...k(e.unwrap())]:e instanceof N?[null,...k(e.unwrap())]:e instanceof it||e instanceof ot?k(e.unwrap()):e instanceof nt?k(e._def.innerType):[],He=class e extends T{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==c.object)return g(t,{code:u.invalid_type,expected:c.object,received:t.parsedType}),v;let n=this.discriminator,r=t.data[n],i=this.optionsMap.get(r);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(g(t,{code:u.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),v)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){let i=new Map;for(let e of n){let n=k(e.shape[t]);if(!n.length)throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(let r of n){if(i.has(r))throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);i.set(r,e)}}return new e({typeName:P.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...w(r)})}};function Ue(e,t){let n=l(e),r=l(t);if(e===t)return{valid:!0,data:e};if(n===c.object&&r===c.object){let n=o.objectKeys(t),r=o.objectKeys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=Ue(e[n],t[n]);if(!r.valid)return{valid:!1};i[n]=r.data}return{valid:!0,data:i}}else if(n===c.array&&r===c.array){if(e.length!==t.length)return{valid:!1};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=Ue(i,a);if(!o.valid)return{valid:!1};n.push(o.data)}return{valid:!0,data:n}}else if(n===c.date&&r===c.date&&+e==+t)return{valid:!0,data:e};else return{valid:!1}}var We=class extends T{_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(ee(e)||ee(r))return v;let i=Ue(e.value,r.value);return i.valid?((te(e)||te(r))&&t.dirty(),{status:t.value,value:i.data}):(g(n,{code:u.invalid_intersection_types}),v)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([e,t])=>r(e,t)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}};We.create=(e,t,n)=>new We({left:e,right:t,typeName:P.ZodIntersection,...w(n)});var A=class e extends T{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==c.array)return g(n,{code:u.invalid_type,expected:c.array,received:n.parsedType}),v;if(n.data.length<this._def.items.length)return g(n,{code:u.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),v;!this._def.rest&&n.data.length>this._def.items.length&&(g(n,{code:u.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),t.dirty());let r=[...n.data].map((e,t)=>{let r=this._def.items[t]||this._def.rest;return r?r._parse(new C(n,e,n.path,t)):null}).filter(e=>!!e);return n.common.async?Promise.all(r).then(e=>_.mergeArray(t,e)):_.mergeArray(t,r)}get items(){return this._def.items}rest(t){return new e({...this._def,rest:t})}};A.create=(e,t)=>{if(!Array.isArray(e))throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);return new A({items:e,typeName:P.ZodTuple,rest:null,...w(t)})};var Ge=class e extends T{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==c.object)return g(n,{code:u.invalid_type,expected:c.object,received:n.parsedType}),v;let r=[],i=this._def.keyType,a=this._def.valueType;for(let e in n.data)r.push({key:i._parse(new C(n,e,n.path,e)),value:a._parse(new C(n,n.data[e],n.path,e)),alwaysSet:e in n.data});return n.common.async?_.mergeObjectAsync(t,r):_.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof T?new e({keyType:t,valueType:n,typeName:P.ZodRecord,...w(r)}):new e({keyType:De.create(),valueType:t,typeName:P.ZodRecord,...w(n)})}},Ke=class extends T{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==c.map)return g(n,{code:u.invalid_type,expected:c.map,received:n.parsedType}),v;let r=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([e,t],a)=>({key:r._parse(new C(n,e,n.path,[a,`key`])),value:i._parse(new C(n,t,n.path,[a,`value`]))}));if(n.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let n of a){let r=await n.key,i=await n.value;if(r.status===`aborted`||i.status===`aborted`)return v;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}})}else{let e=new Map;for(let n of a){let r=n.key,i=n.value;if(r.status===`aborted`||i.status===`aborted`)return v;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}};Ke.create=(e,t,n)=>new Ke({valueType:t,keyType:e,typeName:P.ZodMap,...w(n)});var qe=class e extends T{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==c.set)return g(n,{code:u.invalid_type,expected:c.set,received:n.parsedType}),v;let r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(g(n,{code:u.too_small,minimum:r.minSize.value,type:`set`,inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(g(n,{code:u.too_big,maximum:r.maxSize.value,type:`set`,inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());let i=this._def.valueType;function a(e){let n=new Set;for(let r of e){if(r.status===`aborted`)return v;r.status===`dirty`&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}let o=[...n.data.values()].map((e,t)=>i._parse(new C(n,e,n.path,t)));return n.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(t,n){return new e({...this._def,minSize:{value:t,message:S.toString(n)}})}max(t,n){return new e({...this._def,maxSize:{value:t,message:S.toString(n)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};qe.create=(e,t)=>new qe({valueType:e,minSize:null,maxSize:null,typeName:P.ZodSet,...w(t)});var Je=class e extends T{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==c.function)return g(t,{code:u.invalid_type,expected:c.function,received:t.parsedType}),v;function n(e,n){return h({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,m(),f].filter(e=>!!e),issueData:{code:u.invalid_arguments,argumentsError:n}})}function r(e,n){return h({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,m(),f].filter(e=>!!e),issueData:{code:u.invalid_return_type,returnTypeError:n}})}let i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof et){let e=this;return b(async function(...t){let o=new d([]),s=await e._def.args.parseAsync(t,i).catch(e=>{throw o.addIssue(n(t,e)),o}),c=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(c,i).catch(e=>{throw o.addIssue(r(c,e)),o})})}else{let e=this;return b(function(...t){let o=e._def.args.safeParse(t,i);if(!o.success)throw new d([n(t,o.error)]);let s=Reflect.apply(a,this,o.data),c=e._def.returns.safeParse(s,i);if(!c.success)throw new d([r(s,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new e({...this._def,args:A.create(t).rest(Le.create())})}returns(t){return new e({...this._def,returns:t})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(t,n,r){return new e({args:t||A.create([]).rest(Le.create()),returns:n||Le.create(),typeName:P.ZodFunction,...w(r)})}},Ye=class extends T{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};Ye.create=(e,t)=>new Ye({getter:e,typeName:P.ZodLazy,...w(t)});var Xe=class extends T{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return g(t,{received:t.data,code:u.invalid_literal,expected:this._def.value}),v}return{status:`valid`,value:e.data}}get value(){return this._def.value}};Xe.create=(e,t)=>new Xe({value:e,typeName:P.ZodLiteral,...w(t)});function Ze(e,t){return new Qe({values:e,typeName:P.ZodEnum,...w(t)})}var Qe=class e extends T{_parse(e){if(typeof e.data!=`string`){let t=this._getOrReturnCtx(e),n=this._def.values;return g(t,{expected:o.joinValues(n),received:t.parsedType,code:u.invalid_type}),v}if(this._cache||=new Set(this._def.values),!this._cache.has(e.data)){let t=this._getOrReturnCtx(e),n=this._def.values;return g(t,{received:t.data,code:u.invalid_enum_value,options:n}),v}return b(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(t,n=this._def){return e.create(t,{...this._def,...n})}exclude(t,n=this._def){return e.create(this.options.filter(e=>!t.includes(e)),{...this._def,...n})}};Qe.create=Ze;var $e=class extends T{_parse(e){let t=o.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==c.string&&n.parsedType!==c.number){let e=o.objectValues(t);return g(n,{expected:o.joinValues(e),received:n.parsedType,code:u.invalid_type}),v}if(this._cache||=new Set(o.getValidEnumValues(this._def.values)),!this._cache.has(e.data)){let e=o.objectValues(t);return g(n,{received:n.data,code:u.invalid_enum_value,options:e}),v}return b(e.data)}get enum(){return this._def.values}};$e.create=(e,t)=>new $e({values:e,typeName:P.ZodNativeEnum,...w(t)});var et=class extends T{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==c.promise&&t.common.async===!1?(g(t,{code:u.invalid_type,expected:c.promise,received:t.parsedType}),v):b((t.parsedType===c.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}};et.create=(e,t)=>new et({type:e,typeName:P.ZodPromise,...w(t)});var j=class extends T{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===P.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:e=>{g(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type===`preprocess`){let e=r.transform(n.data,i);if(n.common.async)return Promise.resolve(e).then(async e=>{if(t.value===`aborted`)return v;let r=await this._def.schema._parseAsync({data:e,path:n.path,parent:n});return r.status===`aborted`?v:r.status===`dirty`||t.value===`dirty`?y(r.value):r});{if(t.value===`aborted`)return v;let r=this._def.schema._parseSync({data:e,path:n.path,parent:n});return r.status===`aborted`?v:r.status===`dirty`||t.value===`dirty`?y(r.value):r}}if(r.type===`refinement`){let e=e=>{let t=r.refinement(e,i);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);return e};if(n.common.async===!1){let r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return r.status===`aborted`?v:(r.status===`dirty`&&t.dirty(),e(r.value),{status:t.value,value:r.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(n=>n.status===`aborted`?v:(n.status===`dirty`&&t.dirty(),e(n.value).then(()=>({status:t.value,value:n.value}))))}if(r.type===`transform`)if(n.common.async===!1){let e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!x(e))return v;let a=r.transform(e.value,i);if(a instanceof Promise)throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(e=>x(e)?Promise.resolve(r.transform(e.value,i)).then(e=>({status:t.value,value:e})):v);o.assertNever(r)}};j.create=(e,t,n)=>new j({schema:e,typeName:P.ZodEffects,effect:t,...w(n)}),j.createWithPreprocess=(e,t,n)=>new j({schema:t,effect:{type:`preprocess`,transform:e},typeName:P.ZodEffects,...w(n)});var M=class extends T{_parse(e){return this._getType(e)===c.undefined?b(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};M.create=(e,t)=>new M({innerType:e,typeName:P.ZodOptional,...w(t)});var N=class extends T{_parse(e){return this._getType(e)===c.null?b(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};N.create=(e,t)=>new N({innerType:e,typeName:P.ZodNullable,...w(t)});var tt=class extends T{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return t.parsedType===c.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};tt.create=(e,t)=>new tt({innerType:e,typeName:P.ZodDefault,defaultValue:typeof t.default==`function`?t.default:()=>t.default,...w(t)});var nt=class extends T{_parse(e){let{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return ne(r)?r.then(e=>({status:`valid`,value:e.status===`valid`?e.value:this._def.catchValue({get error(){return new d(n.common.issues)},input:n.data})})):{status:`valid`,value:r.status===`valid`?r.value:this._def.catchValue({get error(){return new d(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}};nt.create=(e,t)=>new nt({innerType:e,typeName:P.ZodCatch,catchValue:typeof t.catch==`function`?t.catch:()=>t.catch,...w(t)});var rt=class extends T{_parse(e){if(this._getType(e)!==c.nan){let t=this._getOrReturnCtx(e);return g(t,{code:u.invalid_type,expected:c.nan,received:t.parsedType}),v}return{status:`valid`,value:e.data}}};rt.create=e=>new rt({typeName:P.ZodNaN,...w(e)});var it=class extends T{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}},at=class e extends T{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?v:e.status===`dirty`?(t.dirty(),y(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})();{let e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?v:e.status===`dirty`?(t.dirty(),{status:`dirty`,value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(t,n){return new e({in:t,out:n,typeName:P.ZodPipeline})}},ot=class extends T{_parse(e){let t=this._def.innerType._parse(e),n=e=>(x(e)&&(e.value=Object.freeze(e.value)),e);return ne(t)?t.then(e=>n(e)):n(t)}unwrap(){return this._def.innerType}};ot.create=(e,t)=>new ot({innerType:e,typeName:P.ZodReadonly,...w(t)}),O.lazycreate;var P;(function(e){e.ZodString=`ZodString`,e.ZodNumber=`ZodNumber`,e.ZodNaN=`ZodNaN`,e.ZodBigInt=`ZodBigInt`,e.ZodBoolean=`ZodBoolean`,e.ZodDate=`ZodDate`,e.ZodSymbol=`ZodSymbol`,e.ZodUndefined=`ZodUndefined`,e.ZodNull=`ZodNull`,e.ZodAny=`ZodAny`,e.ZodUnknown=`ZodUnknown`,e.ZodNever=`ZodNever`,e.ZodVoid=`ZodVoid`,e.ZodArray=`ZodArray`,e.ZodObject=`ZodObject`,e.ZodUnion=`ZodUnion`,e.ZodDiscriminatedUnion=`ZodDiscriminatedUnion`,e.ZodIntersection=`ZodIntersection`,e.ZodTuple=`ZodTuple`,e.ZodRecord=`ZodRecord`,e.ZodMap=`ZodMap`,e.ZodSet=`ZodSet`,e.ZodFunction=`ZodFunction`,e.ZodLazy=`ZodLazy`,e.ZodLiteral=`ZodLiteral`,e.ZodEnum=`ZodEnum`,e.ZodEffects=`ZodEffects`,e.ZodNativeEnum=`ZodNativeEnum`,e.ZodOptional=`ZodOptional`,e.ZodNullable=`ZodNullable`,e.ZodDefault=`ZodDefault`,e.ZodCatch=`ZodCatch`,e.ZodPromise=`ZodPromise`,e.ZodBranded=`ZodBranded`,e.ZodPipeline=`ZodPipeline`,e.ZodReadonly=`ZodReadonly`})(P||={});var st=De.create;ke.create,rt.create,Ae.create,je.create,Me.create,Ne.create,Pe.create,Fe.create,Ie.create,Le.create,D.create,Re.create,ze.create;var ct=O.create;O.strictCreate,Ve.create,He.create,We.create,A.create,Ge.create,Ke.create,qe.create,Je.create,Ye.create,Xe.create,Qe.create,$e.create,et.create,j.create,M.create,N.create,j.createWithPreprocess,at.create;var lt=ct({name:st().trim().min(1,`Name is required`).max(100),email:st().trim().email(`Enter a valid email`).max(255),message:st().trim().min(10,`Tell me a bit more (min 10 chars)`).max(1e3)});function ut(){let[e,t]=(0,r.useState)({name:``,email:``,message:``}),[n,a]=(0,r.useState)({}),[o,s]=(0,r.useState)(!1),c=t=>{t.preventDefault();let n=lt.safeParse(e);if(!n.success){let e={};for(let t of n.error.issues){let n=t.path[0];e[n]||(e[n]=t.message)}a(e);return}a({});let r=encodeURIComponent(`Portfolio inquiry from ${n.data.name}`),i=encodeURIComponent(`${n.data.message}\n\n— ${n.data.name}\n${n.data.email}`);window.location.href=`mailto:manikandan.mit@outlook.com?subject=${r}&body=${i}`,s(!0)},l=r=>({value:e[r],onChange:e=>t(t=>({...t,[r]:e.target.value})),"aria-invalid":!!n[r]}),u=`w-full bg-transparent border-0 border-b border-hairline focus:border-accent focus:outline-none py-3 text-lg placeholder:text-ink-dim transition-colors`;return(0,i.jsxs)(`form`,{onSubmit:c,noValidate:!0,className:`space-y-8`,children:[(0,i.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-8`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`label`,{htmlFor:`name`,className:`text-eyebrow block mb-2`,children:`Your name`}),(0,i.jsx)(`input`,{id:`name`,type:`text`,placeholder:`Ada Lovelace`,className:u,maxLength:100,...l(`name`)}),n.name&&(0,i.jsx)(`p`,{className:`mt-2 text-xs text-destructive`,children:n.name})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`label`,{htmlFor:`email`,className:`text-eyebrow block mb-2`,children:`Email`}),(0,i.jsx)(`input`,{id:`email`,type:`email`,placeholder:`you@company.com`,className:u,maxLength:255,...l(`email`)}),n.email&&(0,i.jsx)(`p`,{className:`mt-2 text-xs text-destructive`,children:n.email})]})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`label`,{htmlFor:`message`,className:`text-eyebrow block mb-2`,children:`Message`}),(0,i.jsx)(`textarea`,{id:`message`,rows:4,placeholder:`Tell me about the role, product, or problem…`,className:`${u} resize-none`,maxLength:1e3,...l(`message`)}),n.message&&(0,i.jsx)(`p`,{className:`mt-2 text-xs text-destructive`,children:n.message})]}),(0,i.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4 pt-2`,children:[(0,i.jsxs)(`button`,{type:`submit`,className:`group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90 transition`,children:[`Send message`,(0,i.jsx)(`span`,{className:`inline-block transition-transform group-hover:translate-x-1`,children:`→`})]}),o&&(0,i.jsx)(`span`,{className:`text-sm text-signal`,children:`✓ Opening your email client…`})]})]})}function dt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function ft(e){if(Array.isArray(e))return e}function pt(e){if(Array.isArray(e))return dt(e)}function mt(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function ht(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Tt(r.key),r)}}function gt(e,t,n){return t&&ht(e.prototype,t),n&&ht(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _t(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Dt(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function F(e,t,n){return(t=Tt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function yt(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function bt(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function St(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?St(Object(n),!0).forEach(function(t){F(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):St(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ct(e,t){return ft(e)||yt(e,t)||Dt(e,t)||bt()}function L(e){return pt(e)||vt(e)||Dt(e)||xt()}function wt(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Tt(e){var t=wt(e,`string`);return typeof t==`symbol`?t:t+``}function Et(e){"@babel/helpers - typeof";return Et=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Et(e)}function Dt(e,t){if(e){if(typeof e==`string`)return dt(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?dt(e,t):void 0}}var Ot=function(){},kt={},At={},jt=null,Mt={mark:Ot,measure:Ot};try{typeof window<`u`&&(kt=window),typeof document<`u`&&(At=document),typeof MutationObserver<`u`&&(jt=MutationObserver),typeof performance<`u`&&(Mt=performance)}catch{}var Nt=(kt.navigator||{}).userAgent,Pt=Nt===void 0?``:Nt,R=kt,z=At,Ft=jt,It=Mt;R.document;var B=!!z.documentElement&&!!z.head&&typeof z.addEventListener==`function`&&typeof z.createElement==`function`,Lt=~Pt.indexOf(`MSIE`)||~Pt.indexOf(`Trident/`),Rt,zt=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Bt=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Vt={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},Ht={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ut=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],V=`classic`,Wt=`duotone`,Gt=`sharp`,Kt=`sharp-duotone`,qt=`chisel`,Jt=`etch`,Yt=`graphite`,Xt=`jelly`,Zt=`jelly-duo`,Qt=`jelly-fill`,$t=`mosaic`,en=`notdog`,tn=`notdog-duo`,nn=`pixel`,rn=`slab`,an=`slab-duo`,on=`slab-press`,sn=`slab-press-duo`,cn=`thumbprint`,ln=`utility`,un=`utility-duo`,dn=`utility-fill`,fn=`vellum`,pn=`whiteboard`,mn=`Classic`,hn=`Duotone`,gn=`Sharp`,_n=`Sharp Duotone`,vn=`Chisel`,yn=`Etch`,bn=`Graphite`,xn=`Jelly`,Sn=`Jelly Duo`,Cn=`Jelly Fill`,wn=`Mosaic`,Tn=`Notdog`,En=`Notdog Duo`,Dn=`Pixel`,On=`Slab`,kn=`Slab Duo`,An=`Slab Press`,jn=`Slab Press Duo`,Mn=`Thumbprint`,Nn=`Utility`,Pn=`Utility Duo`,Fn=`Utility Fill`,In=`Vellum`,Ln=`Whiteboard`,Rn=[V,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn];Rt={},F(F(F(F(F(F(F(F(F(F(Rt,V,mn),Wt,hn),Gt,gn),Kt,_n),qt,vn),Jt,yn),Yt,bn),Xt,xn),Zt,Sn),Qt,Cn),F(F(F(F(F(F(F(F(F(F(Rt,$t,wn),en,Tn),tn,En),nn,Dn),rn,On),an,kn),on,An),sn,jn),cn,Mn),ln,Nn),F(F(F(F(Rt,un,Pn),dn,Fn),fn,In),pn,Ln);var zn={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Bn={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Vn=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Hn={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},Un=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],Wn={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},Gn=[`kit`];F(F({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var Kn={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},qn={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},Jn={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},Yn={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},Xn,Zn={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Qn=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];Xn={},F(F(F(F(F(F(F(F(F(F(Xn,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),F(F(F(F(F(F(F(F(F(F(Xn,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),F(F(F(F(Xn,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),F(F({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var $n={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},er={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},tr={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},nr=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Qn,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),rr=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],ir=[1,2,3,4,5,6,7,8,9,10],ar=ir.concat([11,12,13,14,15,16,17,18,19,20]),or=[].concat(L(Object.keys(er)),rr,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,Zn.GROUP,Zn.SWAP_OPACITY,Zn.PRIMARY,Zn.SECONDARY],ir.map(function(e){return`${e}x`}),ar.map(function(e){return`w-${e}`})),sr={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},H=`___FONT_AWESOME___`,cr=16,lr=`fa`,ur=`svg-inline--fa`,U=`data-fa-i2svg`,dr=`data-fa-pseudo-element`,fr=`data-fa-pseudo-element-pending`,pr=`data-prefix`,mr=`data-icon`,hr=`fontawesome-i2svg`,gr=`async`,_r=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],vr=[`::before`,`::after`,`:before`,`:after`],yr=function(){try{return!0}catch{return!1}}();function br(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[V]}})}var xr=I({},Vt);xr[V]=I(I(I(I({},{"fa-duotone":`duotone`}),Vt[V]),Wn.kit),Wn[`kit-duotone`]);var Sr=br(xr),Cr=I({},Hn);Cr[V]=I(I(I(I({},{duotone:`fad`}),Cr[V]),Yn.kit),Yn[`kit-duotone`]);var wr=br(Cr),Tr=I({},tr);Tr[V]=I(I({},Tr[V]),Jn.kit);var Er=br(Tr),Dr=I({},$n);Dr[V]=I(I({},Dr[V]),Kn.kit),br(Dr);var Or=zt,kr=`fa-layers-text`,Ar=Bt;br(I({},zn));var jr=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Mr=Ht,Nr=[].concat(L(Gn),L(or)),Pr=R.FontAwesomeConfig||{};function Fr(e){var t=z.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Ir(e){return e===``?!0:e===`false`?!1:e===`true`||e}z&&typeof z.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Ct(e,2),n=t[0],r=t[1],i=Ir(Fr(n));i!=null&&(Pr[r]=i)});var Lr={styleDefault:`solid`,familyDefault:V,cssPrefix:lr,replacementClass:ur,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pr.familyPrefix&&(Pr.cssPrefix=Pr.familyPrefix);var Rr=I(I({},Lr),Pr);Rr.autoReplaceSvg||(Rr.observeMutations=!1);var W={};Object.keys(Lr).forEach(function(e){Object.defineProperty(W,e,{enumerable:!0,set:function(t){Rr[e]=t,zr.forEach(function(e){return e(W)})},get:function(){return Rr[e]}})}),Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(e){Rr.cssPrefix=e,zr.forEach(function(e){return e(W)})},get:function(){return Rr.cssPrefix}}),R.FontAwesomeConfig=W;var zr=[];function Br(e){return zr.push(e),function(){zr.splice(zr.indexOf(e),1)}}var G=cr,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vr(e){if(!(!e||!B)){var t=z.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return z.head.insertBefore(t,r),e}}var Hr=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function Ur(){for(var e=12,t=``;e-->0;)t+=Hr[Math.random()*62|0];return t}function Wr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Gr(e){return e.classList?Wr(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function Kr(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function qr(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${Kr(e[n])}" `},``).trim()}function Jr(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function Yr(e){return e.size!==K.size||e.x!==K.x||e.y!==K.y||e.rotate!==K.rotate||e.flipX||e.flipY}function Xr(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function Zr(e){var t=e.transform,n=e.width,r=n===void 0?cr:n,i=e.height,a=i===void 0?cr:i,o=e.startCentered,s=o!==void 0&&o,c=``;return s&&Lt?c+=`translate(${t.x/G-r/2}em, ${t.y/G-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/G}em), calc(-50% + ${t.y/G}em)) `:c+=`translate(${t.x/G}em, ${t.y/G}em) `,c+=`scale(${t.size/G*(t.flipX?-1:1)}, ${t.size/G*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var Qr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function $r(){var e=lr,t=ur,n=W.cssPrefix,r=W.replacementClass,i=Qr;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var ei=!1;function ti(){W.autoAddCss&&!ei&&(Vr($r()),ei=!0)}var ni={mixout:function(){return{dom:{css:$r,insertCss:ti}}},hooks:function(){return{beforeDOMElementCreation:function(){ti()},beforeI2svg:function(){ti()}}}},q=R||{};q[H]||(q[H]={}),q[H].styles||(q[H].styles={}),q[H].hooks||(q[H].hooks={}),q[H].shims||(q[H].shims=[]);var J=q[H],ri=[],ii=function(){z.removeEventListener(`DOMContentLoaded`,ii),ai=1,ri.map(function(e){return e()})},ai=!1;B&&(ai=(z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(z.readyState),ai||z.addEventListener(`DOMContentLoaded`,ii));function oi(e){B&&(ai?setTimeout(e,0):ri.push(e))}function si(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?Kr(e):`<${t} ${qr(r)}>${a.map(si).join(``)}</${t}>`}function ci(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var li=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},ui=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:li(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function di(e){return L(e).length===1?e.codePointAt(0).toString(16):null}function fi(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function pi(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=fi(t);typeof J.hooks.addPack==`function`&&!r?J.hooks.addPack(e,fi(t)):J.styles[e]=I(I({},J.styles[e]||{}),i),e===`fas`&&pi(`fa`,t)}var mi=J.styles,hi=J.shims,gi=Object.keys(Er),_i=gi.reduce(function(e,t){return e[t]=Object.keys(Er[t]),e},{}),vi=null,yi={},bi={},xi={},Si={},Ci={};function wi(e){return~Nr.indexOf(e)}function Ti(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!wi(i)?i:null}var Ei=function(){var e=function(e){return ui(mi,function(t,n,r){return t[r]=ui(n,e,{}),t},{})};yi=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),bi=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Ci=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in mi||W.autoFetchSvg,n=ui(hi,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});xi=n.names,Si=n.unicodes,vi=Pi(W.styleDefault,{family:W.familyDefault})};Br(function(e){vi=Pi(e.styleDefault,{family:W.familyDefault})}),Ei();function Di(e,t){return(yi[e]||{})[t]}function Oi(e,t){return(bi[e]||{})[t]}function ki(e,t){return(Ci[e]||{})[t]}function Ai(e){return xi[e]||{prefix:null,iconName:null}}function ji(e){var t=Si[e],n=Di(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return vi}var Mi=function(){return{prefix:null,iconName:null,rest:[]}};function Ni(e){var t=V,n=gi.reduce(function(e,t){return e[t]=`${W.cssPrefix}-${t}`,e},{});return Rn.forEach(function(r){(e.includes(n[r])||e.some(function(e){return _i[r].includes(e)}))&&(t=r)}),t}function Pi(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?V:t,r=Sr[n][e];if(n===Wt&&!e)return`fad`;var i=wr[n][e]||wr[n][r],a=e in J.styles?e:null;return i||a||null}function Fi(e){var t=[],n=null;return e.forEach(function(e){var r=Ti(W.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Ii(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Li=nr.concat(Un);function Ri(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=Ii(e.filter(function(e){return Li.includes(e)})),a=Ii(e.filter(function(e){return!Li.includes(e)})),o=Ct(i.filter(function(e){return r=e,!Ut.includes(e)}),1)[0],s=o===void 0?null:o,c=Ni(i),l=I(I({},Fi(a)),{},{prefix:Pi(s,{family:c})});return I(I(I({},l),Hi({values:e,family:c,styles:mi,config:W,canonical:l,givenPrefix:r})),zi(n,r,l))}function zi(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Ai(i):{},o=ki(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!mi.far&&mi.fas&&!W.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Bi=Rn.filter(function(e){return e!==V||e!==Wt}),Vi=Object.keys(tr).filter(function(e){return e!==V}).map(function(e){return Object.keys(tr[e])}).flat();function Hi(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===Wt,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Bi.includes(n)&&(Object.keys(s).find(function(e){return Vi.includes(e)})||l.autoFetchSvg)&&(r.prefix=Vn.get(n).defaultShortPrefixId,r.iconName=ki(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=Y()||`fas`),r}var Ui=function(){function e(){mt(this,e),this.definitions={}}return gt(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=I(I({},e.definitions[n]||{}),t[n]),pi(n,t[n]);var r=Er[V][n];r&&pi(r,t[n]),Ei()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Wi=[],Gi={},Ki={},qi=Object.keys(Ki);function Ji(e,t){var n=t.mixoutsTo;return Wi=e,Gi={},Object.keys(Ki).forEach(function(e){qi.indexOf(e)===-1&&delete Ki[e]}),Wi.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Et(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){Gi[e]||(Gi[e]=[]),Gi[e].push(r[e])})}e.provides&&e.provides(Ki)}),n}function Yi(e,t){var n=[...arguments].slice(2);return(Gi[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Xi(e){var t=[...arguments].slice(1);(Gi[e]||[]).forEach(function(e){e.apply(null,t)})}function X(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ki[e]?Ki[e].apply(null,t):void 0}function Zi(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||Y();if(t)return t=ki(n,t)||t,ci(Qi.definitions,n,t)||ci(J.styles,n,t)}var Qi=new Ui,Z={noAuto:function(){W.autoReplaceSvg=!1,W.observeMutations=!1,Xi(`noAuto`)},config:W,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(Xi(`beforeI2svg`,e),X(`pseudoElements2svg`,e),X(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,oi(function(){$i({autoReplaceSvgRoot:t}),Xi(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Et(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ki(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Pi(e[0]);return{prefix:n,iconName:ki(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${W.cssPrefix}-`)>-1||e.match(Or))){var r=Ri(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:ki(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=Y();return{prefix:i,iconName:ki(i,e)||e}}}},library:Qi,findIconDefinition:Zi,toHtml:si},$i=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?z:e;(Object.keys(J.styles).length>0||W.autoFetchSvg)&&B&&W.autoReplaceSvg&&Z.dom.i2svg({node:t})};function ea(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return si(e)})}}),Object.defineProperty(e,"node",{get:function(){if(B){var t=z.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function ta(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(Yr(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=Jr(I(I({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function na(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${W.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:I(I({},i),{},{id:o}),children:r}]}]}function ra(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function ia(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[W.replacementClass,a?`${W.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:I(I({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!ra(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[U]=``);var _=I(I({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:I({},l.styles)}),v=r.found&&n.found?X(`generateAbstractMask`,_)||{children:[],attributes:{}}:X(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?na(_):ta(_)}function aa(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=I(I({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[U]=``);var l=I({},a.styles);Yr(i)&&(l.transform=Zr({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=Jr(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function oa(e){var t=e.content,n=e.extra,r=I(I({},n.attributes),{},{class:n.classes.join(` `)}),i=Jr(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var sa=J.styles;function ca(e){var t=e[0],n=e[1],r=Ct(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${W.cssPrefix}-${Mr.GROUP}`},children:[{tag:`path`,attributes:{class:`${W.cssPrefix}-${Mr.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${W.cssPrefix}-${Mr.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var la={found:!1,width:512,height:512};function ua(e,t){!yr&&!W.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function da(e,t){var n=t;return t===`fa`&&W.styleDefault!==null&&(t=Y()),new Promise(function(r,i){if(n===`fa`){var a=Ai(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&sa[t]&&sa[t][e]){var o=sa[t][e];return r(ca(o))}ua(e,t),r(I(I({},la),{},{icon:W.showMissingIcons&&e&&X(`missingIconAbstract`)||{}}))})}var fa=function(){},pa=W.measurePerformance&&It&&It.mark&&It.measure?It:{mark:fa,measure:fa},ma=`FA "7.3.0"`,ha=function(e){return pa.mark(`${ma} ${e} begins`),function(){return ga(e)}},ga=function(e){pa.mark(`${ma} ${e} ends`),pa.measure(`${ma} ${e}`,`${ma} ${e} begins`,`${ma} ${e} ends`)},_a={begin:ha,end:ga},va=function(){};function ya(e){return typeof(e.getAttribute?e.getAttribute(U):null)==`string`}function ba(e){var t=e.getAttribute?e.getAttribute(pr):null,n=e.getAttribute?e.getAttribute(mr):null;return t&&n}function xa(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(W.replacementClass)}function Sa(){return W.autoReplaceSvg===!0?Da.replace:Da[W.autoReplaceSvg]||Da.replace}function Ca(e){return z.createElementNS(`http://www.w3.org/2000/svg`,e)}function wa(e){return z.createElement(e)}function Ta(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Ca:wa:t;if(typeof e==`string`)return z.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Ta(e,{ceFn:n}))}),r}function Ea(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Da={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Ta(e),t)}),t.getAttribute(U)===null&&W.keepOriginalSource){var n=z.createComment(Ea(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~Gr(t).indexOf(W.replacementClass))return Da.replace(e);var r=RegExp(`${W.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===W.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return si(e)}).join(`
`);t.setAttribute(U,``),t.innerHTML=a}};function Oa(e){e()}function ka(e,t){var n=typeof t==`function`?t:va;if(e.length===0)n();else{var r=Oa;W.mutateApproach===gr&&(r=R.requestAnimationFrame||Oa),r(function(){var t=Sa(),r=_a.begin(`mutate`);e.map(t),r(),n()})}}var Aa=!1;function ja(){Aa=!0}function Ma(){Aa=!1}var Na=null;function Pa(e){if(Ft&&W.observeMutations){var t=e.treeCallback,n=t===void 0?va:t,r=e.nodeCallback,i=r===void 0?va:r,a=e.pseudoElementsCallback,o=a===void 0?va:a,s=e.observeMutationsRoot,c=s===void 0?z:s;Na=new Ft(function(e){if(!Aa){var t=Y();Wr(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!ya(e.addedNodes[0])&&(W.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&W.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&ya(e.target)&&~jr.indexOf(e.attributeName))if(e.attributeName===`class`&&ba(e.target)){var r=Ri(Gr(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(pr,a||t),s&&e.target.setAttribute(mr,s)}else xa(e.target)&&i(e.target)})}}),B&&Na.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Fa(){Na&&Na.disconnect()}function Ia(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function La(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Ri(Gr(e));return i.prefix||=Y(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Oi(i.prefix,e.innerText)||Di(i.prefix,di(e.innerText))),!i.iconName&&W.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Ra(e){return Wr(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function za(){return{iconName:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ba(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=La(e),r=n.iconName,i=n.prefix,a=n.rest,o=Ra(e),s=Yi(`parseNodeAttributes`,{},e);return I({iconName:r,prefix:i,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?Ia(e):[],attributes:o}},s)}var Va=J.styles;function Ha(e){var t=W.autoReplaceSvg===`nest`?Ba(e,{styleParser:!1}):Ba(e);return~t.extra.classes.indexOf(kr)?X(`generateLayersText`,e,t):X(`generateSvgReplacementMutation`,e,t)}function Ua(){return[].concat(L(Un),L(nr))}function Wa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var n=z.documentElement.classList,r=function(e){return n.add(`${hr}-${e}`)},i=function(e){return n.remove(`${hr}-${e}`)},a=W.autoFetchSvg?Ua():Ut.concat(Object.keys(Va));a.includes(`fa`)||a.push(`fa`);var o=[`.${kr}:not([${U}])`].concat(a.map(function(e){return`.${e}:not([${U}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=Wr(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=_a.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Ha(t);n&&e.push(n)}catch(e){yr||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){ka(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ha(e).then(function(e){e&&ka([e],t)})}function Ka(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Zi(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Zi(i||{}),e(r,I(I({},n),{},{mask:i}))}}var qa=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?K:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return ea(I({type:`icon`},e),function(){return Xi(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),ia({icons:{main:ca(v),mask:s?ca(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:I(I({},K),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Ja={mixout:function(){return{icon:Ka(qa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Wa,e.nodeCallback=Ga,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?z:t,r=e.callback;return Wa(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([da(n,r),o.iconName?da(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Ct(o,2),u=l[0],d=l[1];t([e,ia({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=Jr(a);o.length>0&&(n.style=o);var s;return Yr(i)&&(s=X(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},Ya={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return ea({type:`layer`},function(){Xi(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${W.cssPrefix}-layers`].concat(L(r)).join(` `)},children:n}]})}}}},Xa={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return ea({type:`counter`,content:e},function(){return Xi(`beforeDOMElementCreation`,{content:e,params:t}),oa({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${W.cssPrefix}-layers-counter`].concat(L(a))}})})}}}},Za={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?K:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return ea({type:`text`,content:e},function(){return Xi(`beforeDOMElementCreation`,{content:e,params:t}),aa({content:e,transform:I(I({},K),r),extra:{attributes:s,styles:l,classes:[`${W.cssPrefix}-layers-text`].concat(L(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Lt){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,aa({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Qa=RegExp(`"`,`ug`),$a=[1105920,1112319],eo=I(I(I(I({},{FontAwesome:{normal:`fas`,400:`fas`}}),Bn),sr),qn),to=Object.keys(eo).reduce(function(e,t){return e[t.toLowerCase()]=eo[t],e},{}),no=Object.keys(to).reduce(function(e,t){var n=to[t];return e[t]=n[900]||L(Object.entries(n))[0][1],e},{});function ro(e){return di(L(e.replace(Qa,``))[0]||``)}function io(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Qa,``),r=n.codePointAt(0),i=r>=$a[0]&&r<=$a[1],a=n.length===2&&n[0]===n[1];return i||a||t}function ao(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(to[n]||{})[i]||no[n]}function oo(e,t){var n=`${fr}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=Wr(e.children).filter(function(e){return e.getAttribute(dr)===t})[0],o=R.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Ar),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=ao(s,l),p=ro(d),m=c[0].startsWith(`FontAwesome`),h=io(o),g=Di(f,p),_=g;if(m){var v=ji(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(pr)!==f||a.getAttribute(mr)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=za(),b=y.extra;b.attributes[dr]=t,da(g,f).then(function(i){var a=ia(I(I({},y),{},{icons:{main:i,mask:Mi()},prefix:f,iconName:_,extra:b,watchable:!0})),o=z.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return si(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function so(e){return Promise.all([oo(e,`::before`),oo(e,`::after`)])}function co(e){return e.parentNode!==document.head&&!~_r.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(dr)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var lo=function(e){return!!e&&vr.some(function(t){return e.includes(t)})},uo=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=_t(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(lo(a)){var o=vr.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function fo(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(B){var n;if(t)n=e;else if(W.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=_t(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=_t(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=_t(uo(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){W.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=Wr(n).filter(co).map(so),i=_a.begin(`searchPseudoElements`);ja(),Promise.all(r).then(function(){i(),Ma(),e()}).catch(function(){i(),Ma(),t()})})}}var po={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=fo,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?z:t;W.searchPseudoElements&&fo(n)}}},mo=!1,ho={mixout:function(){return{dom:{unwatch:function(){ja(),mo=!0}}}},hooks:function(){return{bootstrap:function(){Pa(Yi(`mutationObserverCallbacks`,{}))},noAuto:function(){Fa()},watch:function(e){var t=e.observeMutationsRoot;mo?Ma():Pa(Yi(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},go=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},_o={mixout:function(){return{parse:{transform:function(e){return go(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=go(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:I({},a.outer),children:[{tag:`g`,attributes:I({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:I(I({},t.icon.attributes),a.path)}]}]}}}},vo={x:0,y:0,width:`100%`,height:`100%`};function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function bo(e){return e.tag===`g`?e.children:[e]}Ji([ni,Ja,Ya,Xa,Za,po,ho,_o,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Ri(n.split(` `).map(function(e){return e.trim()})):Mi();return r.prefix||=Y(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=Xr({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:I(I({},vo),{},{fill:`white`})},p=c.children?{children:c.children.map(yo)}:{},m={tag:`g`,attributes:I({},d.inner),children:[yo(I({tag:c.tag,attributes:I(I({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:I({},d.outer),children:[m]},g=`mask-${a||Ur()}`,_=`clip-${a||Ur()}`,v={tag:`mask`,attributes:I(I({},vo),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:bo(u)},v]};return t.push(y,{tag:`rect`,attributes:I({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},vo)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;R.matchMedia&&(t=R.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:I(I({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=I(I({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:I(I({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:I(I({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:I(I({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:I(I({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:I(I({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:I(I({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:I(I({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Z}),Z.noAuto;var xo=Z.config;Z.library,Z.dom;var So=Z.parse;Z.findIconDefinition,Z.toHtml;var Co=Z.icon;Z.layer,Z.text,Z.counter;function wo(e){return e-=0,e===e}function To(e){return wo(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var Eo=(e,t)=>r.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Do(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Oo=new Map,ko=1e3;function Ao(e){if(Oo.has(e))return Oo.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=To(n);t[e.startsWith(`webkit`)?Do(e):e]=r}}}n=a+1}if(Oo.size===ko){let e=Oo.keys().next().value;e&&Oo.delete(e)}return Oo.set(e,t),t}function jo(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),jo(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Ao(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[To(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Eo)))}return e(t.tag,{...a,...u},...r)}var Mo=jo.bind(null,r.createElement),No=(e,t)=>{let n=(0,r.useId)();return e||(t?n:void 0)},Po=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var Fo=`searchPseudoElementsFullScan`in xo&&typeof xo.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Io=Number.parseInt(Fo)>=7,Lo=()=>Io,Ro=`fa`,Q={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},zo={left:`fa-pull-left`,right:`fa-pull-right`},Bo={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},Vo={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},$={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},Ho={default:`fa-layers`};function Uo(e){let t=xo.cssPrefix||xo.familyPrefix||Ro;return t===Ro?e:e.replace(new RegExp(String.raw`(?<=^|\s)${Ro}-`,`g`),`${t}-`)}function Wo(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,flip360:b,buzz:ee,float:te,jello:x,spinSnap:ne,spinSnap4:S,spinSnap8:C,swing:re,wag:w,className:T}=e,E=[];return T&&E.push(...T.split(` `)),t&&E.push(Q.beat),n&&E.push(Q.fade),r&&E.push(Q.beatFade),i&&E.push(Q.bounce),a&&E.push(Q.shake),o&&E.push(Q.spin),c&&E.push(Q.spinReverse),s&&E.push(Q.spinPulse),l&&E.push(Q.pulse),u&&E.push($.fixedWidth),d&&E.push($.inverse),f&&E.push($.border),p===!0&&E.push($.flip),(p===`horizontal`||p===`both`)&&E.push($.flipHorizontal),(p===`vertical`||p===`both`)&&E.push($.flipVertical),m!=null&&E.push(Vo[m]),h!=null&&h!==0&&E.push(Bo[h]),g!=null&&E.push(zo[g]),_&&E.push($.swapOpacity),Lo()?(v&&E.push($.rotateBy),y&&E.push($.widthAuto),b&&E.push(Q.flip360),ee&&E.push(Q.buzz),te&&E.push(Q.float),x&&E.push(Q.jello),ne&&E.push(Q.spinSnap),S&&E.push(Q.spinSnap4),C&&E.push(Q.spinSnap8),re&&E.push(Q.swing),w&&E.push(Q.wag),(xo.cssPrefix||xo.familyPrefix||Ro)===Ro?E:E.map(Uo)):E}var Go=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function Ko(e){if(e)return Go(e)?e:So.icon(e)}function qo(e){return Object.keys(e)}var Jo=new Po(`FontAwesomeIcon`),Yo={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},Xo=new Set(Object.keys(Yo)),Zo=r.forwardRef((e,t)=>{let n={...Yo,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=No(c,!!i),d=No(s,!!o),f=Ko(r);if(!f)return Jo.error(`Icon lookup is undefined`,r),null;let p=Wo(n),m=typeof l==`string`?So.transform(l):l,h=Ko(i),g=Co(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return Jo.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of qo(n))Xo.has(e)||(v[e]=n[e]);return Mo(_[0],v)});Zo.displayName=`FontAwesomeIcon`,`${Ho.default}${$.fixedWidth}`;var Qo={prefix:`fab`,iconName:`github`,icon:[512,512,[],`f09b`,`M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z`]},$o={prefix:`fab`,iconName:`linkedin-in`,icon:[448,512,[],`f0e1`,`M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z`]},es=[{company:`Blue Yonder`,role:`Lead Software Engineer`,period:`Jul 2024 — Present`,bullets:[`Lead design and development of a large-scale Transport Optimization SaaS platform used by global enterprises.`,`Architect multi-tenant microservices handling high-volume transportation and logistics data.`,`Designed a carrier bid management platform that transforms bids into standardized tariff structures.`,`Introduced Apache Kafka event-driven processing to improve scalability and reliability.`,`Mentor a team of 5 engineers through architecture reviews and technical coaching.`,`Drive CI/CD automation and cloud-native design on Microsoft Azure.`]},{company:`People Tech Group`,role:`Senior Software Engineer`,period:`Jan 2023 — Jul 2024`,bullets:[`Led technical design activities and stakeholder discussions.`,`Built enterprise apps with React, Java, and Spring Boot.`,`Designed databases, RESTful APIs, and CI/CD pipelines.`]},{company:`Walmart Global Tech`,role:`Software Engineer`,period:`Jul 2021 — Jan 2023`,bullets:[`Developed REST APIs and React/Redux/Next.js applications.`,`Enhanced CI/CD pipelines and cross-system integration.`]},{company:`BNP Paribas`,role:`Senior Software Engineer`,period:`Aug 2020 — Jul 2021`,bullets:[`Feasibility studies, solution design, and Spring Boot + Angular development.`,`Built monitoring solutions and improved code quality via SonarQube.`]},{company:`Cognizant`,role:`Software Developer`,period:`Apr 2018 — Aug 2020`,bullets:[`Application enhancements, production support, and RCA for critical incidents.`]},{company:`Accenture`,role:`Software Engineer Associate`,period:`Sep 2014 — Feb 2018`,bullets:[`Built web applications with HTML/CSS/JS/jQuery and services with Spring MVC + JDBC.`]}],ts=[`Solution Architecture`,`System Design`,`Multi-Tenant SaaS`,`Distributed Systems`,`Microservices`,`Event-Driven Architecture`,`Cloud-Native`,`Technical Leadership`,`Team Mentoring`,`CI/CD`,`Enterprise Integration`,`Agile Delivery`],ns=[`Java`,`Spring Boot`,`React`,`Angular`,`REST`,`Microservices`,`Apache Kafka`,`Azure`,`Docker`,`Jenkins`,`PostgreSQL`,`SQL`],rs=[{n:`01`,title:`Transport Optimization SaaS`,context:`Blue Yonder · 2025 - Present`,tag:`Platform Architecture`,blurb:`Multi-tenant transportation planning platform for global enterprises. Owns architecture across microservices, event pipelines, and Azure cloud services handling high-volume logistics data.`,stack:[`Java`,`Spring Boot`,`Kafka`,`Azure`,`PostgreSQL`]},{n:`02`,title:`Carrier Bid Management`,context:`Blue Yonder · 2024 - 2025`,tag:`Domain Modeling`,blurb:`Designed a system that ingests heterogeneous carrier bids and transforms them into a standardized tariff structure — enabling downstream optimization and procurement analytics.`,stack:[`Java`,`Spring Boot`,`REST`,`SQL`]},{n:`03`,title:`User Data Management Services`,context:`Walmart Global Tech · 2021 - 2023`,tag:`Full-Stack`,blurb:`Delivered REST APIs and React/Redux/Next.js experiences to enable end users to manage how their data is collected and processed. Contributed in hardening CI/CD pipelines, and resolving integration gaps across upstream systems.`,stack:[`React`,`Next.js`,`Redux`,`Java`,`Jenkins`]},{n:`04`,title:`Wealth Management Platform`,context:`BNP Paribas · 2018 - 2021`,tag:`Finance Domain`,blurb:`Developed a wealth management platform with Spring Boot and Angular. Built monitoring solutions, improved code quality, and contributed to solution design and feasibility studies.`,stack:[`Spring Boot`,`Angular`]}];function is(){return(0,i.jsxs)(`main`,{className:`min-h-screen text-foreground`,children:[(0,i.jsx)(`header`,{className:`sticky top-0 z-50 backdrop-blur-md bg-background/70 hairline-b`,children:(0,i.jsxs)(`div`,{className:`mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4`,children:[(0,i.jsxs)(`a`,{href:`#top`,className:`font-display text-lg tracking-tight`,children:[`Manikandan`,(0,i.jsx)(`span`,{className:`text-accent`,children:`.`})]}),(0,i.jsxs)(`nav`,{className:`hidden md:flex gap-8 text-sm text-ink-muted`,children:[(0,i.jsx)(`a`,{href:`#work`,className:`hover:text-foreground transition`,children:`Work`}),(0,i.jsx)(`a`,{href:`#projects`,className:`hover:text-foreground transition`,children:`Projects`}),(0,i.jsx)(`a`,{href:`#skills`,className:`hover:text-foreground transition`,children:`Skills`}),(0,i.jsx)(`a`,{href:`#about`,className:`hover:text-foreground transition`,children:`About`}),(0,i.jsx)(`a`,{href:`#contact`,className:`hover:text-foreground transition`,children:`Contact`})]}),(0,i.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,i.jsxs)(`a`,{href:`/manikandan-uthaman-resume.pdf`,download:!0,className:`hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground hover:opacity-90 transition`,children:[(0,i.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,i.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),(0,i.jsx)(`polyline`,{points:`7 10 12 15 17 10`}),(0,i.jsx)(`line`,{x1:`12`,y1:`15`,x2:`12`,y2:`3`})]}),`Resume`]}),(0,i.jsx)(a,{})]})]})}),(0,i.jsxs)(`section`,{id:`top`,className:`relative mx-auto max-w-7xl px-6 pt-20 pb-32`,children:[(0,i.jsxs)(`div`,{className:`grid grid-cols-12 gap-6 items-end`,children:[(0,i.jsxs)(`div`,{className:`col-span-12 lg:col-span-9`,children:[(0,i.jsx)(`p`,{className:`text-eyebrow mb-8`,children:`01 — Lead Software Engineer · India`}),(0,i.jsxs)(`h1`,{className:`text-hero font-display`,children:[`Architecting`,(0,i.jsx)(`br`,{}),(0,i.jsx)(`em`,{className:`italic text-accent`,children:`enterprise-scale`}),(0,i.jsx)(`br`,{}),`SaaS platforms.`]})]}),(0,i.jsxs)(`div`,{className:`col-span-12 lg:col-span-3 lg:pb-6 space-y-6`,children:[(0,i.jsx)(`p`,{className:`text-ink-muted max-w-sm text-[15px] leading-relaxed`,children:`11+ years turning complex business problems into distributed systems, event-driven architectures, and multi-tenant products used by global enterprises.`}),(0,i.jsxs)(`a`,{href:`/manikandan-uthaman-resume.pdf`,download:!0,className:`group inline-flex items-center gap-2 text-sm text-foreground border-b border-accent pb-1 hover:gap-3 transition-all`,children:[`Download résumé (PDF)`,(0,i.jsx)(`span`,{className:`text-accent`,children:`↓`})]})]})]}),(0,i.jsx)(`div`,{className:`mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline hairline-t hairline-b`,children:[{k:`11+`,v:`Years shipping`},{k:`6`,v:`Enterprises served`},{k:`15+`,v:`Engineers mentored`},{k:`24/7`,v:`Prod uptime mindset`}].map(e=>(0,i.jsxs)(`div`,{className:`bg-background p-6`,children:[(0,i.jsx)(`div`,{className:`font-display text-4xl md:text-5xl text-accent`,children:e.k}),(0,i.jsx)(`div`,{className:`text-eyebrow mt-2`,children:e.v})]},e.v))})]}),(0,i.jsx)(`section`,{className:`hairline-b overflow-hidden py-6 bg-surface/40`,children:(0,i.jsx)(`div`,{className:`flex gap-12 animate-marquee whitespace-nowrap font-display text-3xl text-ink-dim w-max`,children:[...[,,]].map((e,t)=>(0,i.jsx)(`div`,{className:`flex gap-12 shrink-0 items-center`,children:[`Walmart Global Tech`,`BNP Paribas`,`Blue Yonder`,`Cognizant`,`Accenture`,`People Tech`].map(e=>(0,i.jsxs)(`span`,{className:`flex items-center gap-12`,children:[e,(0,i.jsx)(`span`,{className:`text-accent`,children:`✦`})]},e))},t))})}),(0,i.jsxs)(`section`,{id:`work`,className:`mx-auto max-w-7xl px-6 py-32`,children:[(0,i.jsxs)(`div`,{className:`grid grid-cols-12 gap-6 mb-16`,children:[(0,i.jsx)(`p`,{className:`col-span-12 md:col-span-3 text-eyebrow`,children:`02 — Experience`}),(0,i.jsxs)(`h2`,{className:`col-span-12 md:col-span-9 font-display text-5xl md:text-6xl tracking-tight`,children:[`A decade of building things`,(0,i.jsx)(`br`,{}),`that `,(0,i.jsx)(`em`,{className:`italic text-accent`,children:`stay in production.`})]})]}),(0,i.jsx)(`div`,{className:`space-y-px bg-hairline`,children:es.map((e,t)=>(0,i.jsx)(`article`,{className:`group bg-background hover:bg-surface transition-colors p-8 md:p-10`,children:(0,i.jsxs)(`div`,{className:`grid grid-cols-12 gap-6`,children:[(0,i.jsxs)(`div`,{className:`col-span-12 md:col-span-3`,children:[(0,i.jsx)(`div`,{className:`text-eyebrow text-accent`,children:String(t+1).padStart(2,`0`)}),(0,i.jsx)(`div`,{className:`font-display text-3xl mt-2`,children:e.company}),(0,i.jsx)(`div`,{className:`text-sm text-ink-muted mt-1`,children:e.period})]}),(0,i.jsxs)(`div`,{className:`col-span-12 md:col-span-9`,children:[(0,i.jsx)(`div`,{className:`text-lg font-medium mb-4`,children:e.role}),(0,i.jsx)(`ul`,{className:`space-y-2 text-ink-muted`,children:e.bullets.map((e,t)=>(0,i.jsxs)(`li`,{className:`flex gap-3`,children:[(0,i.jsx)(`span`,{className:`text-accent mt-2 shrink-0`,children:`—`}),(0,i.jsx)(`span`,{children:e})]},t))})]})]})},e.company))})]}),(0,i.jsx)(`section`,{id:`projects`,className:`hairline-t hairline-b bg-surface/30`,children:(0,i.jsxs)(`div`,{className:`mx-auto max-w-7xl px-6 py-32`,children:[(0,i.jsxs)(`div`,{className:`grid grid-cols-12 gap-6 mb-16`,children:[(0,i.jsx)(`p`,{className:`col-span-12 md:col-span-3 text-eyebrow`,children:`03 — Selected projects`}),(0,i.jsxs)(`h2`,{className:`col-span-12 md:col-span-9 font-display text-5xl md:text-6xl tracking-tight`,children:[`Systems I've owned`,(0,i.jsx)(`br`,{}),`end-to-`,(0,i.jsx)(`em`,{className:`italic text-accent`,children:`end.`})]})]}),(0,i.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-px bg-hairline hairline-t hairline-b`,children:rs.map(e=>(0,i.jsxs)(`article`,{className:`group bg-background hover:bg-surface-elevated transition-colors p-8 md:p-10 flex flex-col gap-6`,children:[(0,i.jsx)(`div`,{className:`flex items-start justify-between`,children:(0,i.jsxs)(`div`,{className:`text-eyebrow text-accent`,children:[e.n,` · `,e.tag]})}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h3`,{className:`font-display text-3xl md:text-4xl leading-tight`,children:e.title}),(0,i.jsx)(`div`,{className:`text-eyebrow mt-2`,children:e.context})]}),(0,i.jsx)(`p`,{className:`text-ink-muted leading-relaxed`,children:e.blurb}),(0,i.jsx)(`div`,{className:`flex flex-wrap gap-2 mt-auto pt-4 border-t border-hairline`,children:e.stack.map(e=>(0,i.jsx)(`span`,{className:`font-mono text-xs text-ink-muted`,children:e},e)).reduce((e,t,n)=>(n>0&&e.push((0,i.jsx)(`span`,{className:`text-ink-dim`,children:`·`},`sep-${n}`)),e.push(t),e),[])})]},e.n))})]})}),(0,i.jsx)(`section`,{id:`skills`,className:`hairline-t hairline-b`,children:(0,i.jsxs)(`div`,{className:`mx-auto max-w-7xl px-6 py-32 grid grid-cols-12 gap-10`,children:[(0,i.jsxs)(`div`,{className:`col-span-12 md:col-span-4`,children:[(0,i.jsx)(`p`,{className:`text-eyebrow mb-6`,children:`04 — Toolkit`}),(0,i.jsxs)(`h2`,{className:`font-display text-5xl`,children:[`Deep in the `,(0,i.jsx)(`em`,{className:`italic text-accent`,children:`JVM.`})]}),(0,i.jsx)(`p`,{className:`mt-6 text-ink-muted`,children:`Backend-heavy full-stack. Comfortable across the stack, sharpest where scale, reliability, and architecture matter.`})]}),(0,i.jsxs)(`div`,{className:`col-span-12 md:col-span-8 space-y-10`,children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`text-eyebrow mb-4`,children:`Core competencies`}),(0,i.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:ts.map(e=>(0,i.jsx)(`span`,{className:`rounded-full border border-hairline bg-background px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent transition-colors`,children:e},e))})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{className:`text-eyebrow mb-4`,children:`Technical stack`}),(0,i.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:ns.map(e=>(0,i.jsx)(`span`,{className:`rounded-md bg-background border border-hairline px-4 py-2 text-sm font-mono text-ink-muted`,children:e},e))})]})]})]})}),(0,i.jsx)(`section`,{id:`about`,className:`mx-auto max-w-7xl px-6 py-32`,children:(0,i.jsxs)(`div`,{className:`grid grid-cols-12 gap-6`,children:[(0,i.jsx)(`p`,{className:`col-span-12 md:col-span-3 text-eyebrow`,children:`05 — About`}),(0,i.jsxs)(`div`,{className:`col-span-12 md:col-span-9 space-y-8`,children:[(0,i.jsxs)(`p`,{className:`font-display text-3xl md:text-4xl leading-[1.15] tracking-tight`,children:[`I design and lead engineering for products that need to be`,(0,i.jsx)(`em`,{className:`italic text-accent`,children:` fast, correct, and multi-tenant `}),`from day one — across supply chain, retail, and banking domains.`]}),(0,i.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-8 text-ink-muted`,children:[(0,i.jsx)(`p`,{children:`At Blue Yonder, I lead architecture for a Transport Optimization SaaS platform used by global enterprises — multi-tenant microservices, Kafka-based event pipelines, and cloud-native services on Azure.`}),(0,i.jsx)(`p`,{children:`Previously I contributed at Walmart, BNP Paribas, Cognizant, and Accenture — with an M.E. from Madras Institute of Technology and a B.E. from MEPCO Schlenk Engineering College.`})]}),(0,i.jsx)(`div`,{className:`grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline hairline-t mt-12`,children:[[`M.E.`,`Madras Institute of Technology, 2014`],[`B.E.`,`MEPCO Schlenk Eng. College, 2012`],[`Domain`,`Supply Chain · Retail · Banking`],[`Based`,`India · Open to relocation`]].map(([e,t])=>(0,i.jsxs)(`div`,{className:`bg-background p-6`,children:[(0,i.jsx)(`div`,{className:`font-display text-2xl`,children:e}),(0,i.jsx)(`div`,{className:`text-xs text-ink-muted mt-2`,children:t})]},e))})]})]})}),(0,i.jsxs)(`section`,{id:`contact`,className:`hairline-t bg-surface/30`,children:[(0,i.jsxs)(`div`,{className:`mx-auto max-w-7xl px-6 py-32`,children:[(0,i.jsx)(`p`,{className:`text-eyebrow mb-8`,children:`06 — Let's talk`}),(0,i.jsxs)(`div`,{className:`grid grid-cols-12 gap-10`,children:[(0,i.jsxs)(`div`,{className:`col-span-12 lg:col-span-5`,children:[(0,i.jsxs)(`h2`,{className:`text-hero font-display`,children:[`Building`,(0,i.jsx)(`br`,{}),`something`,(0,i.jsx)(`br`,{}),(0,i.jsx)(`em`,{className:`italic text-accent`,children:`ambitious?`})]}),(0,i.jsxs)(`div`,{className:`mt-12 space-y-4 text-sm`,children:[(0,i.jsxs)(`a`,{href:`mailto:manikandan.mit@outlook.com`,className:`block group`,children:[(0,i.jsx)(`div`,{className:`text-eyebrow`,children:`Email`}),(0,i.jsx)(`div`,{className:`font-display text-xl mt-1 group-hover:text-accent transition-colors`,children:`manikandan.mit@outlook.com`})]}),(0,i.jsxs)(`a`,{href:`tel:+917502506075`,className:`block group`,children:[(0,i.jsx)(`div`,{className:`text-eyebrow`,children:`Phone`}),(0,i.jsx)(`div`,{className:`font-display text-xl mt-1 group-hover:text-accent transition-colors`,children:`+91 75025 06075`})]}),(0,i.jsxs)(`a`,{href:`https://linkedin.com/in/manikandan-uthaman`,target:`_blank`,rel:`noreferrer`,className:`block group`,children:[(0,i.jsx)(`div`,{className:`text-eyebrow`,children:`LinkedIn`}),(0,i.jsx)(`div`,{className:`font-display text-xl mt-1 group-hover:text-accent transition-colors`,children:`manikandan-uthaman ↗`})]})]})]}),(0,i.jsx)(`div`,{className:`col-span-12 lg:col-span-7 lg:pl-10 lg:border-l lg:border-hairline`,children:(0,i.jsx)(ut,{})})]})]}),(0,i.jsx)(`footer`,{className:`hairline-t`,children:(0,i.jsxs)(`div`,{className:`mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink-dim`,children:[(0,i.jsxs)(`div`,{children:[`© `,new Date().getFullYear(),` Manikandan Uthaman. All rights reserved.`]}),(0,i.jsxs)(`div`,{className:`flex flex-row gap-4 text-base text-ink-dim`,children:[(0,i.jsx)(`a`,{href:`https://github.com/manikandan-uthaman/`,target:`_blank`,children:(0,i.jsx)(Zo,{icon:Qo})}),(0,i.jsx)(`a`,{href:`https://www.linkedin.com/in/manikandan-uthaman/`,target:`_blank`,children:(0,i.jsx)(Zo,{icon:$o})})]}),(0,i.jsx)(`div`,{className:`font-mono`,children:`Designed & engineered with intent.`})]})})]})]})}export{is as component};