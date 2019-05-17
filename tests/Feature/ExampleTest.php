<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testLoginView()
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }

    public function testLoginAdminView()
    {
        $response = $this->get('/loginAdmin');

        $response->assertStatus(200);
    }
}
