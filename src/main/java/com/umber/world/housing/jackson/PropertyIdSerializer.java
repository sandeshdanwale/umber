package com.umber.world.housing.jackson;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

import java.io.IOException;
import java.lang.reflect.Type;

public class PropertyIdSerializer extends StdSerializer<PropertyId> {
	
	private static final long serialVersionUID = 3020785399958877524L;

	public PropertyIdSerializer() {
		super(PropertyId.class);
	}

	@Override
	public void serialize(PropertyId objectId, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
		jsonGenerator.writeNumber(objectId.getRegistrationId());
	}

	@Override
	public JsonNode getSchema(SerializerProvider serializerProvider, Type type) throws JsonMappingException {
		throw new UnsupportedOperationException();
	}

}