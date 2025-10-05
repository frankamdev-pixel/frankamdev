<?php

namespace Database\Factories;
use App\Models\Testimonial;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Testimonial>
 */
class TestimonialFactory extends Factory
{
  protected $model = Testimonial::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return[ 
             'name' => $this->faker->name(),
            'role' => $this->faker->jobTitle(),
            'image' => $this->faker->imageUrl(200,200),
            'message' => $this->faker->sentence(),
        ];
    }
}
