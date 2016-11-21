package com.umber.world.housing.jackson;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

import java.io.IOException;

public class PropertyIdDeserializer extends StdDeserializer<PropertyId> {
	
	private static final long serialVersionUID = 526624613193648263L;

	public PropertyIdDeserializer() {
		super(PropertyId.class);
	}

	@Override
	public PropertyId deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException {
		return new PropertyId(jsonParser.getText());
	}
}
