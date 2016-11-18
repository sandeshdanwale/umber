package com.umber.world.housing.domain.aggregate;

import java.io.Serializable;

public abstract class AggregateId implements Serializable {

	private static final long serialVersionUID = 3061932626608704440L;

	@Override
	public abstract String toString();

	@Override
	public abstract int hashCode();

	@Override
	public abstract boolean equals(Object obj);
}
