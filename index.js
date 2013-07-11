/**
 * Expose component.
 */

module.exports = function (context) {

  /**
   * Uniform
   * Create a uniform.
   * Represents an uniform variable in a shader program.
   * @param {Object} options The options for creating the attribute.
   *   @param {String} [options.name] The name of the uniform.
   *   @param {Number} [options.type] The WebGL type of the uniform.
   *   @param {Number} [options.size] The size of the attributes in bytes.
   *   @param {Number} [options.location] The index location in the shader. 
   * @return {Uniform} A uniform.
   * @api public
   */  

  function Uniform (options) {
    options = options || {};
    this.name = options.name;
    this.type = options.type;
    this.size = options.size;
    this.location = options.location;
    this.set = null;
    this.value = null;
    
    switch (this.type) {
      case context.BOOL:
        this.set = function (v) {
          context.uniform1i(this.location, v);
        };
        break;
      case context.BOOL_VEC2:
        this.set = function (v) {
          context.uniform2iv(this.location, new Uint16Array(v));
        };
        break;
      case context.BOOL_VEC3:
        this.set = function (v) {
          context.uniform3iv(this.location, new Uint16Array(v));
        };
        break;
      case context.BOOL_VEC4:
        this.set = function (v) {
          context.uniform4iv(this.location, new Uint16Array(v));
        };
        break;
      case context.INT:
        this.set = function (v) {
          context.uniform1i(this.location, v);
        };
        break;
      case context.INT_VEC2:
        this.set = function (v) {
          context.uniform2iv(this.location, new Uint16Array(v));
        };
        break;
      case context.INT_VEC3:
        this.set = function (v) {
          context.uniform3iv(this.location, new Uint16Array(v));
        };
        break;
      case context.INT_VEC4:
        this.set = function (v) {
          context.uniform4iv(this.location, new Uint16Array(v));
        };
        break;
      case context.FLOAT:
        this.set = function (v) {
          context.uniform1f(this.location, v);
        };
        break;
      case context.FLOAT_VEC2:
        this.set = function (v) {
          context.uniform2fv(this.location, new Float32Array(v));
        };
        break;
      case context.FLOAT_VEC3:
        this.set = function (v) {
          context.uniform3fv(this.location, new Float32Array(v));
        };
        break;
      case context.FLOAT_VEC4:
        this.set = function (v) {
          context.uniform4fv(this.location, new Float32Array(v));
        };
        break;
      case context.FLOAT_MAT2:
        this.set = function (v) {
          context.uniformMatrix2fv(this.location, false, new Float32Array(v));
        };
        break;
      case context.FLOAT_MAT3:
        this.set = function (v) {
          context.uniformMatrix3fv(this.location, false, new Float32Array(v));
        };
        break;
      case context.FLOAT_MAT4:
        this.set = function (v) {
          context.uniformMatrix4fv(this.location, false, new Float32Array(v));
        };
        break;
      default:
        throw {
          name: "UnknownUniformType",
          message: "The uniform variable type is unknown."
        };
    }
  }

  /**
   * Uniform#value
   * Get/set the value of this uniform.
   * @param {Mixed} value The value to set. 
   * @return {Mixed} The value of this uniform. 
   * @api public
   */

  Uniform.prototype.value = function (value) {
    if (value) {
      return this.set_value(value);
    }
    return this.get_value();
  };

  /**
   * Uniform#get_value
   * Get the value of this uniform.
   * @return {Mixed} The value of this uniform. 
   * @api public
   */

  Uniform.prototype.get_value = function () {
    return this.value;
  };

  /**
   * Uniform#set_value
   * Set the value of this uniform.
   * @param {Mixed} value The value to set. 
   * @return {v3.Uniform} this for chaining.
   * @api public
   */

  Uniform.prototype.setValue = function (value) {
    this.value = value;
    this.set(value);
    return this;
  };

  return Uniform;
};
